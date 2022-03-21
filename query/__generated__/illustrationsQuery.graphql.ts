/**
 * @generated SignedSource<<f3c0217f61b146708685c00fb50a1138>>
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
export type illustrationsQueryVariables = illustrationsQuery$variables;
export type illustrationsQuery$data = {
  readonly illustrationsCollection: {
    readonly total: number;
    readonly items: ReadonlyArray<{
      readonly createDate: any | null;
      readonly image: {
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
      } | null;
      readonly opusNo: number | null;
      readonly title: string | null;
      readonly tag: ReadonlyArray<string | null> | null;
    } | null>;
  } | null;
};
export type illustrationsQueryResponse = illustrationsQuery$data;
export type illustrationsQuery = {
  variables: illustrationsQueryVariables;
  response: illustrationsQuery$data;
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
    "cacheID": "9df4974f27005ce3511712e6397f8969",
    "id": null,
    "metadata": {},
    "name": "illustrationsQuery",
    "operationKind": "query",
    "text": "query illustrationsQuery(\n  $limit: Int!\n) {\n  illustrationsCollection(order: createDate_DESC, limit: $limit) {\n    total\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      tag\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fdeb6c36f6dae8bd14ae8887f1645827";

export default node;
