/** @type {import('next').NextConfig} */

// Auto-detects the right basePath when building inside GitHub Actions,
// so you never have to edit this file by hand:
//   - user/org page repo ("username.github.io")   -> no basePath
//   - project page repo ("username.github.io/repo") -> basePath "/repo"
// Building locally (npm run dev / npm run build) always uses no basePath.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

let basePath = "";
let assetPrefix = "";

if (isGithubActions) {
  const repo = (process.env.GITHUB_REPOSITORY ?? "").split("/")[1] ?? "";
  const isUserOrOrgPage = repo.endsWith(".github.io");
  if (repo && !isUserOrOrgPage) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
