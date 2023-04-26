export const rewrite = async (status: number, url: string) => {
  const res = await fetch(url)
  return new Response(res.body, {
    headers: res.headers,
    status,
  })
}
