import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";
import { Text } from "@/components/retroui/Text";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-none border-2 border-black bg-card p-4 shadow-win95",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: CardProps) => {
  return <div className={cn("flex flex-col space-y-1.5", className)} {...props} />;
};

const CardTitle = ({ className, ...props }: CardProps) => (
  <Text as="h3" className={cn("font-semibold", className)} {...props} />
);

const CardDescription = ({ className, ...props }: CardProps) => (
  <Text className={cn("text-muted-foreground text-sm", className)} {...props} />
);

const CardContent = ({ className, ...props }: CardProps) => {
  return <div className={cn("pt-2", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
