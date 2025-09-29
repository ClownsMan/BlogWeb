import { useState, useEffect, useRef } from 'react';
import './CodeSandbox.css';

interface CodeSandboxProps {
  initialCode?: string;
}

const CodeSandbox: React.FC<CodeSandboxProps> = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const consoleRef = useRef<{ log: (...args: any[]) => void } | null>(null);
  const originalConsoleLog = console.log;

  // 劫持console.log输出
  useEffect(() => {
    // 创建自定义console.log
    const customConsole = {
      log: (...args: any[]) => {
        // 格式化输出内容
        const formattedOutput = args.map(arg => {
          if (typeof arg === 'object') {
            try {
              return JSON.stringify(arg, null, 2);
            } catch (e) {
              return String(arg);
            }
          }
          return String(arg);
        }).join(' ');
        
        setOutput(prev => [...prev, formattedOutput]);
        originalConsoleLog(...args); // 保留原始行为
      }
    };

    consoleRef.current = customConsole;
    
    // 恢复原始console.log
    return () => {
      console.log = originalConsoleLog;
    };
  }, [originalConsoleLog]);

  // 运行代码
  const runCode = () => {
    setOutput([]);
    setIsRunning(true);

    try {
      // 使用new Function执行代码，并传入自定义console
      const func = new Function('console', code);
      func(consoleRef.current!);
    } catch (error) {
      setOutput(prev => [...prev, `Error: ${(error as Error).message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  // 重置代码
  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  // 清空输出
  const clearOutput = () => {
    setOutput([]);
  };

  // 处理代码变化
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-sandbox">
      <div className="sandbox-header">
        <h3>代码沙箱</h3>
        <div className="sandbox-controls">
          <button 
            className="run-btn" 
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? '运行中...' : '▶ 运行'}
          </button>
          <button className="reset-btn" onClick={resetCode}>
            🔄 重置
          </button>
          <button className="clear-btn" onClick={clearOutput}>
            🗑️ 清空
          </button>
        </div>
      </div>

      {/* 代码编辑器 */}
      <div className="code-editor-container">
        <textarea
          className="code-editor"
          value={code}
          onChange={handleCodeChange}
          placeholder="在这里编写JavaScript代码..."
          spellCheck={false}
        />
      </div>

      {/* 输出控制台 */}
      <div className="console-container">
        <div className="console-header">
          <span>控制台输出</span>
        </div>
        <div className="console-output">
          {output.length === 0 ? (
            <div className="console-placeholder">运行代码后将在此显示输出</div>
          ) : (
            output.map((line, index) => (
              <div key={index} className="console-line">
                {line}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSandbox;