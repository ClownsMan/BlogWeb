// 问题卡片类型
export interface QuestionCard {
  id: string;
  question: string;
  coreAnswer: string;
  fullAnswer?: string;
  tags: string[];
  difficulty: '简单' | '中等' | '困难';
  type: '原理' | '手写' | '优化';
  isFavorite: boolean;
  mastery: '已掌握' | '待复习' | '难点' | '未标记';
  codeTemplate?: string; // 手写题的代码模板
}

// 过滤器类型
export interface Filters {
  technologies: string[];
  difficulties: ('简单' | '中等' | '困难')[];
  types: ('原理' | '手写' | '优化')[];
  mastery: ('已掌握' | '待复习' | '难点' | '未标记')[];
}

// 随机抽题模式状态
export interface QuizState {
  isActive: boolean;
  currentQuestion: QuestionCard | null;
  score: number;
  totalQuestions: number;
}