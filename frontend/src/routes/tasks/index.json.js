import { client } from "$lib/graphql-client";

import { gql } from "graphql-request";

export const get = async () => {
	try {
		const query = gql`
			query Tasks {
				tasks {
					id
					title
					description
				}
			}
		`;

		const { tasks } = await client.request(query);

		return {
			status: 200,
			body: { tasks }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error: "There was a server error" }
		};
	}
};
