import type { QuestionCard } from './types';

// 模拟问题数据
export const mockQuestions: QuestionCard[] = [
  {
    id: '1',
    question: '什么是闭包?',
    coreAnswer: '闭包是函数和其词法环境的引用捆绑在一起形成的组合。闭包可以让函数访问并操作函数外部的变量。',
    fullAnswer: '闭包是JavaScript中一个重要的概念，它指的是函数和其词法环境的引用捆绑在一起形成的组合。闭包可以让函数访问并操作函数外部的变量，即使函数在其定义的词法作用域之外执行。\n\n闭包的主要用途包括：\n1. 实现私有变量\n2. 柯里化函数\n3. 回调函数中的状态保存\n\n示例：\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```',
    tags: ['JavaScript'],
    difficulty: '中等',
    type: '原理',
    isFavorite: false,
    mastery: '未标记'
  },
  {
    id: '2',
    question: 'var、let、const的区别?',
    coreAnswer: 'var是函数作用域，存在变量提升；let和const是块级作用域，不存在变量提升；const声明的变量不能重新赋值。',
    fullAnswer: 'var、let、const都是JavaScript中用于声明变量的关键字，但它们有以下主要区别：\n\n1. **作用域**：\n   - var：函数作用域\n   - let和const：块级作用域（大括号{}内）\n\n2. **变量提升**：\n   - var：存在变量提升，可以在声明前使用\n   - let和const：不存在变量提升，在声明前使用会报错\n\n3. **重复声明**：\n   - var：允许重复声明\n   - let和const：不允许重复声明\n\n4. **重新赋值**：\n   - var和let：可以重新赋值\n   - const：不能重新赋值，但对象的属性可以修改',
    tags: ['JavaScript'],
    difficulty: '简单',
    type: '原理',
    isFavorite: false,
    mastery: '未标记'
  },
  {
    id: '3',
    question: '实现防抖和节流函数',
    coreAnswer: '防抖是在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；节流是规定在一个单位时间内，只能触发一次函数。',
    fullAnswer: '防抖和节流都是用来优化高频触发事件的技术：\n\n**防抖(Debounce)**：\n在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。\n适用于搜索输入、窗口调整等场景。\n\n**节流(Throttle)**：\n规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。\n适用于滚动加载、高频点击等场景。',
    tags: ['JavaScript', '算法'],
    difficulty: '困难',
    type: '手写',
    isFavorite: false,
    mastery: '未标记',
    codeTemplate: `// 防抖函数实现
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 节流函数实现
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// 测试代码
const log = () => console.log('触发了');
const debouncedLog = debounce(log, 1000);
const throttledLog = throttle(log, 1000);

// 尝试调用几次看看效果
debouncedLog();
debouncedLog(); // 只会执行最后一次

throttledLog();
throttledLog(); // 在1秒内只会执行一次`
  },
  {
    id: '4',
    question: 'React的生命周期有哪些?',
    coreAnswer: 'React组件生命周期分为挂载、更新和卸载三个阶段。在函数组件中使用useEffect钩子模拟生命周期。',
    fullAnswer: 'React组件生命周期可以分为以下三个主要阶段：\n\n1. **挂载阶段**：组件被创建并插入DOM树\n   - constructor\n   - static getDerivedStateFromProps\n   - render\n   - componentDidMount\n\n2. **更新阶段**：组件被重新渲染\n   - static getDerivedStateFromProps\n   - shouldComponentUpdate\n   - render\n   - getSnapshotBeforeUpdate\n   - componentDidUpdate\n\n3. **卸载阶段**：组件从DOM树中移除\n   - componentWillUnmount\n\n在函数组件中，我们使用React Hooks（特别是useEffect）来模拟生命周期行为。',
    tags: ['React'],
    difficulty: '中等',
    type: '原理',
    isFavorite: false,
    mastery: '未标记'
  },
  {
    id: '5',
    question: 'CSS的盒模型是什么?',
    coreAnswer: 'CSS盒模型是描述元素在页面上占据空间的方式，包括内容区(content)、内边距(padding)、边框(border)和外边距(margin)。',
    fullAnswer: 'CSS盒模型是描述元素在页面上占据空间的方式，包括以下几个部分：\n\n1. **内容区(content)**：显示文本和图像的区域\n2. **内边距(padding)**：内容区与边框之间的空白\n3. **边框(border)**：围绕内边距的边界\n4. **外边距(margin)**：边框与其他元素之间的空白\n\nCSS盒模型有两种标准：\n- **W3C标准盒模型**：width/height只包括内容区\n- **IE盒模型**：width/height包括内容区、内边距和边框\n\n可以通过box-sizing属性来切换盒模型：\n- box-sizing: content-box; // W3C标准盒模型\n- box-sizing: border-box; // IE盒模型',
    tags: ['CSS'],
    difficulty: '简单',
    type: '原理',
    isFavorite: false,
    mastery: '未标记'
  },
  {
    id: '6',
    question: '如何优化React应用性能?',
    coreAnswer: 'React性能优化可以从多个方面入手，包括使用React.memo、useMemo和useCallback减少不必要的渲染，以及虚拟列表处理大量数据等。',
    fullAnswer: '优化React应用性能的方法有很多，以下是一些常见的优化技巧：\n\n1. **减少不必要的渲染**：\n   - 使用React.memo包裹函数组件\n   - 使用useMemo缓存计算结果\n   - 使用useCallback缓存函数引用\n\n2. **列表优化**：\n   - 使用key属性帮助React识别元素\n   - 对长列表使用虚拟滚动（如react-window或react-virtualized）\n\n3. **代码分割**：\n   - 使用React.lazy和Suspense进行组件懒加载\n   - 使用Webpack的代码分割功能\n\n4. **状态管理优化**：\n   - 合理拆分组件状态\n   - 使用useReducer管理复杂状态\n   - 考虑使用Redux等状态管理库\n\n5. **其他优化**：\n   - 避免在render中创建新对象\n   - 优化大型计算\n   - 使用性能分析工具（如React Profiler）',
    tags: ['React', '优化'],
    difficulty: '困难',
    type: '优化',
    isFavorite: false,
    mastery: '未标记'
  }
];