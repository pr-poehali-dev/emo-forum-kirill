import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface ForumPost {
  id: number;
  author: string;
  title: string;
  content: string;
  replies: number;
  time: string;
  section: string;
  isOnline?: boolean;
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    author: "dark_angel_666",
    title: "Кирилл снова в черном пальто 🖤",
    content: "Видел его сегодня в метро... Такой стильный в длинном черном пальто. Хочется подойти, но боюсь...",
    replies: 23,
    time: "11:11",
    section: "Стиль одежды",
    isOnline: true
  },
  {
    id: 2,
    author: "broken_heart_2007",
    title: "Скучаю по нашим разговорам...",
    content: "Кирилл, если читаешь это... Помнишь наши беседы о MCR? Люди плохие, но ты всегда был другим.",
    replies: 45,
    time: "23:47",
    section: "Скучаю",
    isOnline: false
  },
  {
    id: 3,
    author: "emo_princess",
    title: "Его плейлист на Spotify 🎵",
    content: "Нашла его профиль... Кишлак, Автостопом по фазе сна, My Chemical Romance. Такой андеграундный вкус! 🖤",
    replies: 67,
    time: "03:33",
    section: "Музыка"
  },
  {
    id: 4,
    author: "shadow_walker",
    title: "Помню как познакомились",
    content: "Было это в 2019... Стояли на остановке под дождем. Он включил \"Кишлак\" и мы молча слушали под каплями дождя...",
    replies: 89,
    time: "11:11",
    section: "Личные истории"
  },
  {
    id: 5,
    author: "midnight_tears",
    title: "[АРХИВ] Старая фотка с концерта",
    content: "Нашла в телефоне фото с концерта 2018 года. Кирилл в толпе, такой счастливый... Времена были лучше.",
    replies: 156,
    time: "4 года назад",
    section: "Воспоминания"
  }
];

const forumSections = [
  { name: "Главная", icon: "Home", count: 234 },
  { name: "Скучаю", icon: "Heart", count: 89 },
  { name: "Стиль одежды", icon: "Shirt", count: 45 },
  { name: "Музыка", icon: "Music", count: 67 },
  { name: "Личные истории", icon: "MessageCircle", count: 123 },
  { name: "Воспоминания", icon: "Clock", count: 78 }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [showUserInfo, setShowUserInfo] = useState(false);

  const filteredPosts = activeSection === "Главная" 
    ? forumPosts 
    : forumPosts.filter(post => post.section === activeSection);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl gothic-font glow-red">💀</div>
              <div>
                <h1 className="text-2xl font-bold gothic-font glow-red">
                  Dark Emo Forum
                </h1>
                <p className="text-sm text-muted-foreground">
                  Дух русской эмо школы • 11:11 • Люди плохие
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="destructive" className="animate-pulse-glow">
                Online: 133
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowUserInfo(!showUserInfo)}
              >
                <Icon name="User" size={16} className="mr-2" />
                dark_soul_77
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Skull" size={20} />
                  <span>Разделы форума</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {forumSections.map((section) => (
                  <Button
                    key={section.name}
                    variant={activeSection === section.name ? "default" : "ghost"}
                    className="w-full justify-between h-auto py-3"
                    onClick={() => setActiveSection(section.name)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={section.icon as any} size={16} />
                      <span>{section.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {section.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Emo Quote */}
            <Card className="bg-muted">
              <CardContent className="p-4 text-center">
                <div className="text-6xl mb-2">💔</div>
                <p className="italic text-sm text-muted-foreground">
                  "В 3 часа ночи душа болит сильнее..."
                </p>
                <p className="text-xs mt-2 text-primary">— anonymous_user</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center space-x-2">
                <Icon name="MessageSquare" size={24} />
                <span>{activeSection}</span>
              </h2>
              <p className="text-muted-foreground">
                Обсуждения о Кирилле Петракове • Всего тем: {filteredPosts.length}
              </p>
            </div>

            {/* Clock Widget */}
            <Card className="mb-6 bg-primary/10 border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="text-4xl gothic-font text-primary mb-2">11:11</div>
                <p className="text-sm text-muted-foreground">
                  Время загадывать желания о Кирилле ✨
                </p>
              </CardContent>
            </Card>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <Icon name="Skull" size={16} />
                          </div>
                          {post.isOnline && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{post.section}</Badge>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.content}
                    </p>
                    <Separator className="my-3" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Icon name="Heart" size={16} className="mr-2" />
                          Нравится
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          {post.replies} ответов
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="Share" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* New Post Button */}
            <Card className="mt-6 bg-primary/5 border-dashed border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🖤</div>
                <h3 className="font-semibold mb-2">Поделись своими мыслями о Кирилле</h3>
                <p className="text-muted-foreground mb-4">
                  Расскажи о его стиле, музыке или просто напиши, как скучаешь...
                </p>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать новую тему
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2024 Dark Emo Forum • Посвящается Кириллу Петракову
            </p>
            <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
              <span>💔 Дух русской эмо школы</span>
              <span>•</span>
              <span>🌙 Люди плохие, но мы тут</span>
              <span>•</span>
              <span>⏰ 11:11 навсегда</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}