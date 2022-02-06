/**
 * @generated SignedSource<<44803e33adfa026f8fadf0206e1f61f9>>
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
var v0 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
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
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "booksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1ef5255192ca25c92fdbdbad9b395f64",
    "id": null,
    "metadata": {},
    "name": "booksQuery",
    "operationKind": "query",
    "text": "query booksQuery {\n  booksCollection {\n    items {\n      title\n      page\n      cover {\n        url\n        width\n        height\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5a8f3dca6d034013f7b9e99a8dcac30f";

export default node;
