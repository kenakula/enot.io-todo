import React, { ReactNode } from 'react';
import { TechnicalIssues } from '../technical-issues/technical-issues';

interface StateProps {
  error: null | any;
  errorInfo: null | any;
}

export class ErrorBoundary extends React.Component<any, StateProps> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): JSX.Element | ReactNode {
    if (this.state.errorInfo) {
      return (
        <TechnicalIssues
          header="Что-то пошло не так. Обратитесь в поддержку"
          message={this.state.error && this.state.error.toString()}
        />
      );
    }

    return this.props.children;
  }
}
