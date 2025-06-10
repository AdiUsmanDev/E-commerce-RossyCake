import { Button } from "@/components/ui/button";
import { RefreshCw, ServerCrash } from "lucide-react";

const ApiErrorDisplay: React.FC<{
  title: string;
  error: Error;
  onRetry: () => void;
}> = ({ title, error, onRetry }) => (
  <div className="flex flex-col items-center justify-center text-center py-16 bg-red-50 dark:bg-red-900/10 rounded-lg">
    <ServerCrash className="h-16 w-16 text-destructive mb-4" />
    <h2 className="text-2xl font-bold text-destructive">{title}</h2>
    <p className="text-muted-foreground mt-2 max-w-md">{error.message}</p>
    <Button onClick={onRetry} className="mt-6">
      <RefreshCw className="h-4 w-4 mr-2" /> Coba Lagi
    </Button>
  </div>
);

export default ApiErrorDisplay;
