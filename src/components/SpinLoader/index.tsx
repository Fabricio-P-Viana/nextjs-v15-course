import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
}

export default function SpinLoader({ className = '' }: SpinLoaderProps) {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className='h-10 w-10 border-5 border-slate-900 border-t-transparent rounded-full animate-spin' />
    </div>
  );
}
