import { graphql } from "@octokit/graphql/dist-types/types";

export async function addProjectColumn(
  octoKit: graphql,
  projectId: string,
  columnName: string
) {
  await octoKit(
    `mutation addProjectColumn($projectId: ID!, $columnName: String!) {
    addProjectColumn(input: { projectId: $projectId, name: $columnName}) {
      clientMutationId
    }
  }`,
    {
      projectId,
      columnName,
    }
  );
}

export async function deleteProjectColumn(octoKit: graphql, columnId: string) {
  await octoKit(
    `mutation deleteProjectColumn($columnId: ID!) {
      deleteProjectColumn(input: {columnId: $columnId}) {
        clientMutationId
      }
    }
    `,
    {
      columnId,
    }
  );
}
