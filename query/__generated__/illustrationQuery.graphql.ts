/**
 * @generated SignedSource<<3473fcc72451b119657b610e00bd0853>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type illustrationQuery$variables = {
  opusNo: number;
};
export type illustrationQueryVariables = illustrationQuery$variables;
export type illustrationQuery$data = {
  readonly illustrationsCollection: {
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
export type illustrationQueryResponse = illustrationQuery$data;
export type illustrationQuery = {
  variables: illustrationQueryVariables;
  response: illustrationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "opusNo"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 1
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "opusNo",
            "variableName": "opusNo"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
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
    "name": "illustrationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "illustrationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5860cb858321bddfcf63838af7ac90d9",
    "id": null,
    "metadata": {},
    "name": "illustrationQuery",
    "operationKind": "query",
    "text": "query illustrationQuery(\n  $opusNo: Int!\n) {\n  illustrationsCollection(where: {opusNo: $opusNo}, limit: 1) {\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      tag\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cbfc0c5728f66928524b28d510b94372";

export default node;
