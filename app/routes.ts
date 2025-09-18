import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/user", "routes/user.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/info", "routes/info.tsx"),
] satisfies RouteConfig;
