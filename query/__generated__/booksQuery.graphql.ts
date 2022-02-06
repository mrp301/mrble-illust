/**
 * @generated SignedSource<<1d0ea86e938d6be55f2dad93c6652d46>>
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
      readonly page: number | null;
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
            "name": "page",
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
    "cacheID": "2247d807f9ea12ee9f75f7d630fff08e",
    "id": null,
    "metadata": {},
    "name": "booksQuery",
    "operationKind": "query",
    "text": "query booksQuery {\n  booksCollection {\n    items {\n      title\n      page\n      cover {\n        title\n        url\n        width\n        height\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "61f798a29f7708f330a075e8a7af0d68";

export default node;
