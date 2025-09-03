import { Bell, X, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notifications } from "@/data/tutors";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NotificationSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [dismissed, setDismissed] = useState<string[]>([]);

  const visibleNotifications = showAll
    ? notifications.filter((n) => !dismissed.includes(n.id))
    : notifications.filter((n) => !dismissed.includes(n.id)).slice(0, 3);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "info":
        return <Info className="h-5 w-5 text-info" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-4 border-l-success";
      case "info":
        return "border-l-4 border-l-info";
      case "warning":
        return "border-l-4 border-l-warning";
      default:
        return "border-l-4 border-l-primary";
    }
  };

  return (
    <section className="py-12 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              Latest Notifications
            </h2>
            {notifications.length > 3 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : "View All"}
              </Button>
            )}
          </div>

          <div className="space-y-3">
            {visibleNotifications.map((notification, index) => (
              <Card
                key={notification.id}
                className={cn(
                  "p-4 hover:shadow-card-hover transition-all animate-fade-in",
                  getTypeColor(notification.type)
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  {getIcon(notification.type)}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {notification.title}
                          {notification.important && (
                            <Badge variant="destructive" className="text-xs">
                              Important
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.content}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {notification.date}
                        </p>
                      </div>
                      <button
                        onClick={() => setDismissed([...dismissed, notification.id])}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {visibleNotifications.length === 0 && (
            <Card className="p-8 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No new notifications</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotificationSection;