
export function ErrorHandler({ errorMessage }: { errorMessage: string }) {
     return (
          <div className="loading h-[85vh] flex items-center justify-center">
               {errorMessage} | 🌐
          </div>
     )
}
