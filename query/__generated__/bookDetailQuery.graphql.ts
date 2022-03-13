/**
 * @generated SignedSource<<349c33758f52afed20f51366f05afe72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type bookDetailQuery$variables = {
  slug: string;
};
export type bookDetailQueryVariables = bookDetailQuery$variables;
export type bookDetailQuery$data = {
  readonly booksCollection: {
    readonly items: ReadonlyArray<{
      readonly buy: string | null;
      readonly description: {
        readonly json: any;
      } | null;
      readonly event: string | null;
      readonly page: number | null;
      readonly plateType: string | null;
      readonly price: number | null;
      readonly releaseDate: any | null;
      readonly slug: string | null;
      readonly title: string | null;
      readonly tag: ReadonlyArray<string | null> | null;
      readonly " $fragmentSpreads": FragmentRefs<"BookViewerArea_fragment">;
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
v1 = [
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "buy",
  "storageKey": null
},
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "event",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "page",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "plateType",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tag",
  "storageKey": null
},
v12 = [
  (v10/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "bookDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BookViewerArea_fragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "bookDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "cover",
                "plural": false,
                "selections": (v12/*: any*/),
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
                    "selections": (v12/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "866c7732925a187248c03114213cd5b5",
    "id": null,
    "metadata": {},
    "name": "bookDetailQuery",
    "operationKind": "query",
    "text": "query bookDetailQuery(\n  $slug: String!\n) {\n  booksCollection(where: {slug: $slug}) {\n    items {\n      buy\n      description {\n        json\n      }\n      event\n      page\n      plateType\n      price\n      releaseDate\n      slug\n      title\n      tag\n      ...BookViewerArea_fragment\n    }\n  }\n}\n\nfragment BookViewerArea_fragment on Books {\n  cover {\n    title\n    url\n  }\n  samplePagesCollection {\n    items {\n      title\n      url\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ec2fff5201a24f36edc275e23c704674";

export default node;
