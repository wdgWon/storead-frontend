import { Button } from "../ui/button";

function SocialLoginButtonGroup() {
  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <a
        href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`}
        className="w-full"
      >
        <Button
          type="button"
          variant="outline"
          className="w-full bg-white rounded-md font-bold text-black"
        >
          Google
        </Button>
      </a>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code&scope=profile_nickname`}
        className="w-full"
      >
        <Button
          type="button"
          variant="outline"
          className="w-full bg-yellow-300 rounded-md font-bold text-black"
        >
          Kakao
        </Button>
      </a>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`}
        className="w-full"
      >
        <Button
          type="button"
          variant="outline"
          className="w-full bg-slate-700 rounded-md font-bold text-white"
        >
          Github
        </Button>
      </a>
    </div>
  );
}

export default SocialLoginButtonGroup;
