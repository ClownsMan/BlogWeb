import { useState, useEffect } from 'react';
import type { Filters } from '../types';
import './FilterPanel.css';

interface FilterPanelProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFiltersChange }) => {
  const [localFilters, setLocalFilters] = useState<Filters>(filters);

  // 当外部filters变化时更新本地状态
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  // 技术栈数据
  const technologies = ['JavaScript', 'React', 'CSS', '算法'];

  // 处理技术栈筛选
  const handleTechnologyToggle = (tech: string) => {
    const newTechnologies = localFilters.technologies.includes(tech)
      ? localFilters.technologies.filter(t => t !== tech)
      : [...localFilters.technologies, tech];
    
    const newFilters = { ...localFilters, technologies: newTechnologies };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  // 处理难度筛选
  const handleDifficultyToggle = (difficulty: '简单' | '中等' | '困难') => {
    const newDifficulties = localFilters.difficulties.includes(difficulty)
      ? localFilters.difficulties.filter(d => d !== difficulty)
      : [...localFilters.difficulties, difficulty];
    
    const newFilters = { ...localFilters, difficulties: newDifficulties };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  // 处理题型筛选
  const handleTypeToggle = (type: '原理' | '手写' | '优化') => {
    const newTypes = localFilters.types.includes(type)
      ? localFilters.types.filter(t => t !== type)
      : [...localFilters.types, type];
    
    const newFilters = { ...localFilters, types: newTypes };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  // 处理掌握程度筛选
  const handleMasteryToggle = (mastery: '已掌握' | '待复习' | '难点' | '未标记') => {
    const newMastery = localFilters.mastery.includes(mastery)
      ? localFilters.mastery.filter(m => m !== mastery)
      : [...localFilters.mastery, mastery];
    
    const newFilters = { ...localFilters, mastery: newMastery };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  // 重置所有筛选条件
  const handleReset = () => {
    const resetFilters: Filters = {
      technologies: [],
      difficulties: [],
      types: [],
      mastery: []
    };
    setLocalFilters(resetFilters);
    onFiltersChange(resetFilters);
  };

  return (
    <div className="filter-panel">
      <h3>筛选条件</h3>
      
      {/* 搜索框 */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="搜索题目、答案或标签..." 
          className="search-input"
        />
      </div>
      
      {/* 技术栈筛选 */}
      <div className="filter-section">
        <h4>技术栈</h4>
        <div className="filter-options">
          {technologies.map((tech) => (
            <button
              key={tech}
              className={`filter-option ${localFilters.technologies.includes(tech) ? 'active' : ''}`}
              onClick={() => handleTechnologyToggle(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* 难度筛选 */}
      <div className="filter-section">
        <h4>难度</h4>
        <div className="filter-options">
          <button
            className={`filter-option difficulty-easy ${localFilters.difficulties.includes('简单') ? 'active' : ''}`}
            onClick={() => handleDifficultyToggle('简单')}
          >
            简单
          </button>
          <button
            className={`filter-option difficulty-medium ${localFilters.difficulties.includes('中等') ? 'active' : ''}`}
            onClick={() => handleDifficultyToggle('中等')}
          >
            中等
          </button>
          <button
            className={`filter-option difficulty-hard ${localFilters.difficulties.includes('困难') ? 'active' : ''}`}
            onClick={() => handleDifficultyToggle('困难')}
          >
            困难
          </button>
        </div>
      </div>

      {/* 题型筛选 */}
      <div className="filter-section">
        <h4>题型</h4>
        <div className="filter-options">
          <button
            className={`filter-option type-principle ${localFilters.types.includes('原理') ? 'active' : ''}`}
            onClick={() => handleTypeToggle('原理')}
          >
            原理
          </button>
          <button
            className={`filter-option type-code ${localFilters.types.includes('手写') ? 'active' : ''}`}
            onClick={() => handleTypeToggle('手写')}
          >
            手写
          </button>
          <button
            className={`filter-option type-optimize ${localFilters.types.includes('优化') ? 'active' : ''}`}
            onClick={() => handleTypeToggle('优化')}
          >
            优化
          </button>
        </div>
      </div>

      {/* 掌握程度筛选 */}
      <div className="filter-section">
        <h4>掌握程度</h4>
        <div className="filter-options">
          <button
            className={`filter-option mastery-mastered ${localFilters.mastery.includes('已掌握') ? 'active' : ''}`}
            onClick={() => handleMasteryToggle('已掌握')}
          >
            已掌握
          </button>
          <button
            className={`filter-option mastery-review ${localFilters.mastery.includes('待复习') ? 'active' : ''}`}
            onClick={() => handleMasteryToggle('待复习')}
          >
            待复习
          </button>
          <button
            className={`filter-option mastery-hard ${localFilters.mastery.includes('难点') ? 'active' : ''}`}
            onClick={() => handleMasteryToggle('难点')}
          >
            难点
          </button>
          <button
            className={`filter-option mastery-default ${localFilters.mastery.includes('未标记') ? 'active' : ''}`}
            onClick={() => handleMasteryToggle('未标记')}
          >
            未标记
          </button>
        </div>
      </div>

      {/* 重置按钮 */}
      <button className="reset-btn" onClick={handleReset}>
        🔄 重置筛选
      </button>

      {/* 随机抽题按钮 */}
      <button className="random-btn">
        🎲 随机抽题模式
      </button>
    </div>
  );
};

export default FilterPanel;