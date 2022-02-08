/**
 * @generated SignedSource<<662e2a1a52f05ee246db9a430feeb628>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type booksQuery$variables = {};
export type booksQueryVariables = booksQuery$variables;
export type booksQuery$data = {
  readonly booksCollection: {
    readonly items: ReadonlyArray<{
      readonly title: string | null;
      readonly slug: string | null;
      readonly event: string | null;
      readonly releaseDate: any | null;
      readonly cover: {
        readonly title: string | null;
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
      } | null;
    } | null>;
  } | null;
};
export type booksQueryResponse = booksQuery$data;
export type booksQuery = {
  variables: booksQueryVariables;
  response: booksQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order",
        "value": "releaseDate_DESC"
      }
    ],
    "concreteType": "BooksCollection",
    "kind": "LinkedField",
    "name": "booksCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Books",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "event",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "cover",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "width",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "booksCollection(order:\"releaseDate_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "booksQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "booksQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7ef79f2bc646bc0a80b495f6694368e0",
    "id": null,
    "metadata": {},
    "name": "booksQuery",
    "operationKind": "query",
    "text": "query booksQuery {\n  booksCollection(order: releaseDate_DESC) {\n    items {\n      title\n      slug\n      event\n      releaseDate\n      cover {\n        title\n        url\n        width\n        height\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6f80870ce2b1d9f4b8f5f0b139d7753e";

export default node;
