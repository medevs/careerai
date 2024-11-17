"use client";

import { useEffect, useState } from "react";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Notification, notifications } from "@/lib/notifications";
import { cn } from "@/lib/utils";

export function NotificationList() {
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      const data = await notifications.getAll();
      setItems(data);
    } catch (error) {
      console.error("Failed to load notifications:", error);
    } finally {
      setLoading(false);
    }
  }

  async function markAsRead(id: string) {
    try {
      await notifications.markAsRead(id);
      setItems((current) =>
        current.map((item) =>
          item.id === id ? { ...item, read: true } : item
        )
      );
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  }

  async function markAllAsRead() {
    try {
      await notifications.markAllAsRead();
      setItems((current) =>
        current.map((item) => ({ ...item, read: true }))
      );
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error);
    }
  }

  const unreadCount = items.filter((item) => !item.read).length;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Notifications</h2>
          {unreadCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="text-sm"
            onClick={markAllAsRead}
          >
            Mark all as read
          </Button>
        )}
      </div>

      <ScrollArea className="h-[300px]">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground">No notifications</p>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "p-4 rounded-lg transition-colors",
                  item.read
                    ? "bg-muted/50"
                    : "bg-primary/5 hover:bg-primary/10"
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {!item.read && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => markAsRead(item.id)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}