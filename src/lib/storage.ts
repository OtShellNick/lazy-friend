class LocalStorageService {
  private isClientSide() {
    return typeof window !== 'undefined';
  }

  private setItem(key: string, value: unknown) {
    if (this.isClientSide()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  private getItem(key: string) {
    if (this.isClientSide()) {
      const value = localStorage.getItem(key);
      try {
        if (value) return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return null;
  }

  private removeItem(key: string) {
    if (this.isClientSide()) {
      localStorage.removeItem(key);
    }
  }

  private clear() {
    if (this.isClientSide()) {
      localStorage.clear();
    }
  }

  public getShowInfo() {
    return this.getItem('showInfo');
  }

  public setShowInfo(value: boolean) {
    this.setItem('showInfo', value);
  }
}

export const storage = new LocalStorageService();
