'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export default class ErrorCatch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    // Also try to log to a visible element
    console.error('ErrorCatch caught:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: '24px',
              margin: '24px auto',
              maxWidth: '700px',
              background: '#fff3f3',
              border: '2px solid #dc2626',
              borderRadius: '12px',
              fontFamily: 'monospace',
              fontSize: '13px',
              lineHeight: 1.5,
              overflow: 'auto',
            }}
          >
            <h2
              style={{
                color: '#dc2626',
                fontSize: '16px',
                marginBottom: '12px',
              }}
            >
              Erreur capturée par ErrorCatch:
            </h2>
            <p style={{ color: '#991b1b', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {this.state.error.toString()}
            </p>
            {this.state.errorInfo && (
              <details style={{ marginTop: '12px', color: '#666' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  Stack trace
                </summary>
                <pre
                  style={{
                    marginTop: '8px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontSize: '11px',
                    maxHeight: '300px',
                    overflow: 'auto',
                  }}
                >
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        )
      );
    }

    return this.props.children;
  }
}
