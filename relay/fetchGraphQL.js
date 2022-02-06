const fetchGraphQL = async (text, variables) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  return await response.json();
};

export default fetchGraphQL;
