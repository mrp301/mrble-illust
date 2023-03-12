/**
 * @generated SignedSource<<c833c32bc2a12acc41739f60407b249e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type illustrationsQuery$variables = {
  limit: number;
};
export type illustrationsQuery$data = {
  readonly illustrationsCollection: {
    readonly items: ReadonlyArray<{
      readonly createDate: any | null;
      readonly image: {
        readonly height: number | null;
        readonly url: string | null;
        readonly width: number | null;
      } | null;
      readonly listed: boolean | null;
      readonly opusNo: number | null;
      readonly tag: ReadonlyArray<string | null> | null;
      readonly title: string | null;
    } | null>;
    readonly total: number;
  } | null;
};
export type illustrationsQuery = {
  response: illustrationsQuery$data;
  variables: illustrationsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      },
      {
        "kind": "Literal",
        "name": "order",
        "value": "createDate_DESC"
      }
    ],
    "concreteType": "IllustrationsCollection",
    "kind": "LinkedField",
    "name": "illustrationsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "total",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Illustrations",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createDate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "image",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "opusNo",
            "storageKey": null
          },
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
            "name": "tag",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "listed",
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
    "name": "illustrationsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "illustrationsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d28391a1d019ed5b5da4d8cd0c05d5c7",
    "id": null,
    "metadata": {},
    "name": "illustrationsQuery",
    "operationKind": "query",
    "text": "query illustrationsQuery(\n  $limit: Int!\n) {\n  illustrationsCollection(order: createDate_DESC, limit: $limit) {\n    total\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      tag\n      listed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "beb535dc2d5f6855f15b2154582c7d5f";

export default node;
