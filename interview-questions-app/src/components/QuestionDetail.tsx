import type { QuestionCard } from '../types';
import CodeSandbox from './CodeSandbox';
import './QuestionDetail.css';

interface QuestionDetailProps {
  question: QuestionCard;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
  onUpdateMastery: (id: string, mastery: QuestionCard['mastery']) => void;
}

const QuestionDetail: React.FC<QuestionDetailProps> = ({
  question,
  onBack,
  onToggleFavorite,
  onUpdateMastery
}) => {
  // 获取掌握程度对应的颜色类名
  const getMasteryColorClass = (mastery: string): string => {
    switch (mastery) {
      case '已掌握':
        return 'mastery-mastered';
      case '待复习':
        return 'mastery-review';
      case '难点':
        return 'mastery-hard';
      default:
        return 'mastery-default';
    }
  };

  // 渲染Markdown格式的答案（简单实现）
  const renderAnswerContent = (content: string) => {
    // 简单的Markdown解析
    let renderedContent = content
      .replace(/```javascript([\s\S]*?)```/g, '<pre><code class="language-javascript">$1</code></pre>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/#{1} (.*?)\n/g, '<h2>$1</h2>')
      .replace(/#{2} (.*?)\n/g, '<h3>$1</h3>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
    
    return { __html: renderedContent };
  };

  return (
    <div className="question-detail">
      {/* 返回按钮 */}
      <button className="back-btn" onClick={onBack}>
        ← 返回列表
      </button>

      {/* 顶部速览 */}
      <div className="question-overview">
        <div className="overview-header">
          <button
            className={`favorite-btn ${question.isFavorite ? 'favorited' : ''}`}
            onClick={() => onToggleFavorite(question.id)}
            aria-label={question.isFavorite ? '取消收藏' : '收藏'}
          >
            ⭐
          </button>
          
          <h1>{question.question}</h1>
        </div>

        <div className="core-answer-section">
          <h3>核心答案</h3>
          <p className="core-answer">{question.coreAnswer}</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="detail-content">
        {/* 左侧：主要内容 */}
        <div className="main-content">
          <div className="full-answer-section">
            <h2>详细解析</h2>
            <div 
              className="full-answer"
              dangerouslySetInnerHTML={renderAnswerContent(question.fullAnswer || '')}
            />
          </div>

          {/* 代码沙箱（仅适用于手写题） */}
          {question.type === '手写' && question.codeTemplate && (
            <div className="code-sandbox-section">
              <h2>实践代码</h2>
              <CodeSandbox initialCode={question.codeTemplate} />
            </div>
          )}

          {/* 相关题目 */}
          <div className="related-questions-section">
            <h2>相关题目</h2>
            <div className="related-questions">
              <div className="related-question-item">
                <span>1. 相关题目示例 1</span>
              </div>
              <div className="related-question-item">
                <span>2. 相关题目示例 2</span>
              </div>
              <div className="related-question-item">
                <span>3. 相关题目示例 3</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：知识树导航 */}
        <div className="sidebar">
          <div className="knowledge-tree">
            <h3>知识树</h3>
            <div className="tree-content">
              <div className="tree-node root">
                <span>前端基础知识</span>
                <div className="tree-children">
                  {question.tags.includes('JavaScript') && (
                    <div className="tree-node">
                      <span>JavaScript</span>
                      <div className="tree-children">
                        {question.type === '原理' && (
                          <div className="tree-node">
                            <span>核心概念</span>
                            <div className="tree-children">
                              <div className="tree-node active">
                                <span>{question.question}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {question.type === '手写' && (
                          <div className="tree-node">
                            <span>手写实现</span>
                            <div className="tree-children">
                              <div className="tree-node active">
                                <span>{question.question}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {question.tags.includes('React') && (
                    <div className="tree-node">
                      <span>React</span>
                      <div className="tree-children">
                        <div className="tree-node active">
                          <span>{question.question}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 掌握程度标记 */}
          <div className="mastery-section">
            <h3>掌握程度</h3>
            <div className="mastery-buttons">
              <button
                className={`mastery-btn ${getMasteryColorClass('已掌握')} ${question.mastery === '已掌握' ? 'active' : ''}`}
                onClick={() => onUpdateMastery(question.id, '已掌握')}
              >
                ✅ 已掌握
              </button>
              <button
                className={`mastery-btn ${getMasteryColorClass('待复习')} ${question.mastery === '待复习' ? 'active' : ''}`}
                onClick={() => onUpdateMastery(question.id, '待复习')}
              >
                ⚠️ 待复习
              </button>
              <button
                className={`mastery-btn ${getMasteryColorClass('难点')} ${question.mastery === '难点' ? 'active' : ''}`}
                onClick={() => onUpdateMastery(question.id, '难点')}
              >
                ❌ 难点
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;