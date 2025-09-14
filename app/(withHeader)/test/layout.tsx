import { PropsWithChildren } from "react";

function TestLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 py-8">
      {children}
    </div>
  );
}

export default TestLayout;
