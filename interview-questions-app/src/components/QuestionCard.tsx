import { useState } from 'react';
import type { QuestionCard as QuestionCardType } from '../types';
import './QuestionCard.css';

interface QuestionCardProps {
  question: QuestionCardType;
  onToggleFavorite: (id: string) => void;
  onUpdateMastery: (id: string, mastery: QuestionCardType['mastery']) => void;
  onViewDetail: (id: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onToggleFavorite,
  onUpdateMastery,
  onViewDetail
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // 获取标签对应的颜色类名
  const getTagColorClass = (tag: string): string => {
    switch (tag.toLowerCase()) {
      case 'javascript':
        return 'tag-js';
      case 'react':
        return 'tag-react';
      case 'css':
        return 'tag-css';
      case '算法':
        return 'tag-algorithm';
      default:
        return 'tag-default';
    }
  };

  // 获取难度对应的颜色类名
  const getDifficultyColorClass = (difficulty: string): string => {
    switch (difficulty) {
      case '简单':
        return 'difficulty-easy';
      case '中等':
        return 'difficulty-medium';
      case '困难':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  // 获取题型对应的颜色类名
  const getTypeColorClass = (type: string): string => {
    switch (type) {
      case '原理':
        return 'type-principle';
      case '手写':
        return 'type-code';
      case '优化':
        return 'type-optimize';
      default:
        return '';
    }
  };

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

  return (
    <div className={`question-card ${showAnswer ? 'show-answer' : ''}`}>
      {/* 收藏按钮 */}
      <button
        className={`favorite-btn ${question.isFavorite ? 'favorited' : ''}`}
        onClick={() => onToggleFavorite(question.id)}
        aria-label={question.isFavorite ? '取消收藏' : '收藏'}
      >
        ⭐
      </button>

      {/* 问题内容 */}
      <div className="question-content">
        <h3>{question.question}</h3>
        
        {/* 标签区域 */}
        <div className="tags-container">
          {question.tags.map((tag) => (
            <span key={tag} className={`tag ${getTagColorClass(tag)}`}>
              {tag}
            </span>
          ))}
          <span className={`difficulty-tag ${getDifficultyColorClass(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className={`type-tag ${getTypeColorClass(question.type)}`}>
            {question.type}
          </span>
        </div>
      </div>

      {/* 查看答案按钮 */}
      {/* <button
        className="view-answer-btn"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        💡 {showAnswer ? '隐藏答案' : '查看核心答案'}
      </button> */}

      {/* 答案区域 */}
      {showAnswer && (
        <div className="answer-container">
          <p className="core-answer">{question.coreAnswer}</p>
          <button 
            className="view-detail-btn"
            onClick={() => onViewDetail(question.id)}
          >
            🔍 深入原理与追问
          </button>
        </div>
      )}

      <div className='question-actions'>
        {/* 掌握程度标记 */}
        <div className="mastery-container">
          <span onClick={() => onUpdateMastery(question.id, '已掌握')}>✅</span>
          <span onClick={() => onUpdateMastery(question.id, '待复习')}>⚠️</span>
          <span onClick={() => onUpdateMastery(question.id, '难点')}>❌</span>
        </div>

        {/* 提示点击翻转背后有答案 */}
        <div className="answer-hint">
          点击翻转背后有答案
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;