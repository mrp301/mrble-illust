/**
 * @generated SignedSource<<102cc493ff19cda9ab10428c993b8bc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type bookDetailQuery$variables = {
  slug: string;
};
export type bookDetailQueryVariables = bookDetailQuery$variables;
export type bookDetailQuery$data = {
  readonly booksCollection: {
    readonly items: ReadonlyArray<{
      readonly title: string | null;
      readonly slug: string | null;
      readonly page: number | null;
      readonly releaseDate: any | null;
      readonly event: string | null;
      readonly plateType: string | null;
      readonly price: number | null;
      readonly cover: {
        readonly title: string | null;
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
      } | null;
      readonly description: {
        readonly json: any;
      } | null;
    } | null>;
  } | null;
};
export type bookDetailQueryResponse = bookDetailQuery$data;
export type bookDetailQuery = {
  variables: bookDetailQueryVariables;
  response: bookDetailQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
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
          (v1/*: any*/),
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
            "name": "page",
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
            "kind": "ScalarField",
            "name": "event",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "plateType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
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
              (v1/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "BooksDescription",
            "kind": "LinkedField",
            "name": "description",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "json",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "bookDetailQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "bookDetailQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "853dd4a40aa8bfad395c0ab26011a4ef",
    "id": null,
    "metadata": {},
    "name": "bookDetailQuery",
    "operationKind": "query",
    "text": "query bookDetailQuery(\n  $slug: String!\n) {\n  booksCollection(where: {slug: $slug}) {\n    items {\n      title\n      slug\n      page\n      releaseDate\n      event\n      plateType\n      price\n      cover {\n        title\n        url\n        width\n        height\n      }\n      description {\n        json\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5e4ed48cd5aa45707fac49431428083";

export default node;
