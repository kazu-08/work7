export default async () => {
  const data = { message: "Hello, World!" };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};