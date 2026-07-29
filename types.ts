export interface PageConfig {
  title: string;
  links: { name: string; url: string }[];
}

export interface WorkerConfig {
  monitors: Monitor[];
  notification: NotificationConfig;
}

interface Monitor {
  id: string;
  name: string;
  url: string;
  method: string;
  type: string;
}

interface NotificationConfig {
  email: {
    from: string;
    to: string;
    smtp_host: string;
    smtp_port: number;
    smtp_user: string;
    smtp_password: string;
  };
}
