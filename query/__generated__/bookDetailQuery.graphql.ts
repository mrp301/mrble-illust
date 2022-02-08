/**
 * @generated SignedSource<<36c874f36be4f0622b4f03944bd2c009>>
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
      readonly buy: string | null;
      readonly cover: {
        readonly title: string | null;
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
      } | null;
      readonly description: {
        readonly json: any;
      } | null;
      readonly event: string | null;
      readonly page: number | null;
      readonly plateType: string | null;
      readonly price: number | null;
      readonly releaseDate: any | null;
      readonly samplePagesCollection: {
        readonly items: ReadonlyArray<{
          readonly title: string | null;
          readonly url: string | null;
          readonly width: number | null;
          readonly height: number | null;
        } | null>;
      } | null;
      readonly slug: string | null;
      readonly title: string | null;
      readonly tag: ReadonlyArray<string | null> | null;
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
v3 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "buy",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "cover",
            "plural": false,
            "selections": (v2/*: any*/),
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
            "name": "page",
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
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetCollection",
            "kind": "LinkedField",
            "name": "samplePagesCollection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "items",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tag",
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
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "bookDetailQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3849ae6d7e175f8f6ca2a7345dd19d83",
    "id": null,
    "metadata": {},
    "name": "bookDetailQuery",
    "operationKind": "query",
    "text": "query bookDetailQuery(\n  $slug: String!\n) {\n  booksCollection(where: {slug: $slug}) {\n    items {\n      buy\n      cover {\n        title\n        url\n        width\n        height\n      }\n      description {\n        json\n      }\n      event\n      page\n      plateType\n      price\n      releaseDate\n      samplePagesCollection {\n        items {\n          title\n          url\n          width\n          height\n        }\n      }\n      slug\n      title\n      tag\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0389571061dc13639067df1df230db98";

export default node;
