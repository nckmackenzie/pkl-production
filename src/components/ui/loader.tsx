// import { cn } from '@/lib/utils';
// import { cva } from 'class-variance-authority';
import { Loader as Spinner } from 'lucide-react';

type LoaderProps = {
  type?: string;
  // size?: string;
};

export default function Loader({ type = 'loader' }: LoaderProps) {
  if (type === 'loader') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
        <div className="loader"></div>
      </div>
    );
  }

  if (type === 'spinner') {
    // const spinnerVariants = cva('text-gold animate-spin', {
    //   variants: {
    //     size: {
    //       sm: 'w-4 h-4',
    //       default: 'w-6 h-6',
    //       md: 'w-8 h-8',
    //     },
    //   },
    //   defaultVariants: {
    //     size: 'default',
    //   },
    // });
    return (
      <div className="flex justify-center mt-8">
        {/* <Spinner className={cn(spinnerVariants({ size }))} /> */}
        <Spinner className="text-primary w-8 h-8 animate-spin" />
      </div>
    );
  }
}
