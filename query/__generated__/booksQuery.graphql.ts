/**
 * @generated SignedSource<<3f8c64cd45aa299bef06e6df24b45692>>
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
    "args": null,
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
    "storageKey": null
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
    "cacheID": "e1c0f3c5d63a8fd268ec6e95201c4571",
    "id": null,
    "metadata": {},
    "name": "booksQuery",
    "operationKind": "query",
    "text": "query booksQuery {\n  booksCollection {\n    items {\n      title\n      slug\n      cover {\n        title\n        url\n        width\n        height\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "53e3aa78ae421b94816d27efad9d5387";

export default node;
