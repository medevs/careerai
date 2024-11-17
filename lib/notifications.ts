export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export const notifications = {
  async getAll(): Promise<Notification[]> {
    const response = await fetch('/api/notifications');
    if (!response.ok) throw new Error('Failed to fetch notifications');
    return response.json();
  },

  async markAsRead(id: string): Promise<void> {
    await fetch(`/api/notifications/${id}/read`, { method: 'POST' });
  },

  async markAllAsRead(): Promise<void> {
    await fetch('/api/notifications/read-all', { method: 'POST' });
  },
};