import { Image, Link, Navbar } from '@nextui-org/react';

export const Header = () => {
  return (
    <Navbar className="dark text-foreground bg-background">
      <p className="font-semibold text-2xl">QuizApp</p>

      <Link isExternal href="https://github.com/cristian-quintanilla/quiz-app">
        <Image
          width={ 32 }
          alt="GitHub"
          src="/github-mark-white.png"
        />
      </Link>
    </Navbar>
  );
}
