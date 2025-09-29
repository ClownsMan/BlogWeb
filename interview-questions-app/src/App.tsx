import { useState, useEffect } from 'react';
import type { QuestionCard, Filters } from './types';
import { mockQuestions } from './mockData';
import QuestionCardComponent from './components/QuestionCard';
import FilterPanel from './components/FilterPanel';
import QuestionDetail from './components/QuestionDetail';
import './App.css';

function App() {
  // 状态管理
  const [questions, setQuestions] = useState<QuestionCard[]>([]);
  const [filters, setFilters] = useState<Filters>({
    technologies: [],
    difficulties: [],
    types: [],
    mastery: []
  });
  const [filteredQuestions, setFilteredQuestions] = useState<QuestionCard[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);

  // 初始化数据
  useEffect(() => {
    setQuestions(mockQuestions);
    setFilteredQuestions(mockQuestions);
  }, []);

  // 应用筛选条件
  useEffect(() => {
    let result = [...questions];

    // 按技术栈筛选
    if (filters.technologies.length > 0) {
      result = result.filter(q => 
        q.tags.some(tag => filters.technologies.includes(tag))
      );
    }

    // 按难度筛选
    if (filters.difficulties.length > 0) {
      result = result.filter(q => 
        filters.difficulties.includes(q.difficulty)
      );
    }

    // 按题型筛选
    if (filters.types.length > 0) {
      result = result.filter(q => 
        filters.types.includes(q.type)
      );
    }

    // 按掌握程度筛选
    if (filters.mastery.length > 0) {
      result = result.filter(q => 
        filters.mastery.includes(q.mastery)
      );
    }

    setFilteredQuestions(result);
  }, [questions, filters]);

  // 切换收藏状态
  const handleToggleFavorite = (id: string) => {
    setQuestions(prev => 
      prev.map(q => 
        q.id === id ? { ...q, isFavorite: !q.isFavorite } : q
      )
    );
  };

  // 更新掌握程度
  const handleUpdateMastery = (id: string, mastery: QuestionCard['mastery']) => {
    setQuestions(prev => 
      prev.map(q => 
        q.id === id ? { ...q, mastery } : q
      )
    );
  };

  // 查看问题详情
  const handleViewDetail = (id: string) => {
    setSelectedQuestion(id);
    setIsDetailView(true);
  };

  // 返回列表页
  const handleBackToList = () => {
    setIsDetailView(false);
    setSelectedQuestion(null);
  };

  // 获取当前选中的问题
  const getSelectedQuestion = (): QuestionCard | undefined => {
    if (!selectedQuestion) return undefined;
    return questions.find(q => q.id === selectedQuestion);
  };

  // 渲染统计信息
  const renderStats = () => {
    const total = questions.length;
    const favorited = questions.filter(q => q.isFavorite).length;
    const mastered = questions.filter(q => q.mastery === '已掌握').length;
    const toReview = questions.filter(q => q.mastery === '待复习').length;
    const hardPoints = questions.filter(q => q.mastery === '难点').length;
    
    return (
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">总题数:</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">已收藏:</span>
          <span className="stat-value">{favorited}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">已掌握:</span>
          <span className="stat-value mastered">{mastered}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">待复习:</span>
          <span className="stat-value review">{toReview}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">难点:</span>
          <span className="stat-value hard">{hardPoints}</span>
        </div>
      </div>
    );
  };

  // 渲染主内容
  const renderMainContent = () => {
    if (!isDetailView) {
      // 列表视图
      return (
        <>
          {/* 内容布局 */}
          <div className="content-layout">
            {/* 左侧过滤器 */}
            <div className="sidebar">
              <FilterPanel 
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>

            {/* 统计信息 */}
            {renderStats()}

            {/* 右侧问题列表 */}
            <section className="questions-list">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map(question => (
                  <QuestionCardComponent
                    key={question.id}
                    question={question}
                    onToggleFavorite={handleToggleFavorite}
                    onUpdateMastery={handleUpdateMastery}
                    onViewDetail={handleViewDetail}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <p>没有找到匹配的问题，请调整筛选条件</p>
                </div>
              )}
            </section>
          </div>
        </>
      );
    } else {
      // 详情视图
      const selected = getSelectedQuestion();
      return selected ? (
        <QuestionDetail
          question={selected}
          onBack={handleBackToList}
          onToggleFavorite={handleToggleFavorite}
          onUpdateMastery={handleUpdateMastery}
        />
      ) : (
        <div className="empty-state">
          <p>问题不存在或已被删除</p>
          <button onClick={handleBackToList}>返回列表</button>
        </div>
      );
    }
  };

  return (
    <div className="app">
      {/* 头部 */}
      <header className="app-header">
        <h1>前端速查手册</h1>
        <p>极致简洁的翻卡式学习 · 即时代码验证 · 智能记忆追踪</p>
      </header>

      {/* 主内容区域 */}
      <main className="app-main">
        {renderMainContent()}
      </main>

      {/* 底部 */}
      <footer className="app-footer">
        <p>© 2024 前端速查手册 - 帮助开发者快速掌握前端知识</p>
      </footer>
    </div>
  );
}

export default App;
