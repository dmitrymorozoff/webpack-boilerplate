const NODE_ENV = process.env.NODE_ENV;

module.exports = env = {
  production: NODE_ENV === "production",
  development: NODE_ENV === "development" || typeof NODE_ENV === "undefined",
  current: "'" + NODE_ENV + "'",
};
