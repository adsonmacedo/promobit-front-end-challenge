export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'post',
    include: 0,
    order: '-sys.createdAt',
    limit: '10',
  })

  const pages = Math.ceil(res.total / res.limit) - 1
  const pagesToGo = Array.from({ length: pages }, (v, i) => i + 1)
  const paths = pagesToGo.map(p => ({
    params: {
      uid: p.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { uid } = params
  const skipPages = parseInt(uid) * 10

  const data = await getAllPostsByPage(skipPages)
  const categories = await getAllCategories()

  return {
    props: {
      posts: data.items,
      total: data.total,
      limit: data.limit,
      categories,
      skipPages,
    },
  }
}
