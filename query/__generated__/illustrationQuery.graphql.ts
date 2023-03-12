/**
 * @generated SignedSource<<94b2ca6b68af99d65e581b1a73d0df05>>
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
export type illustrationQuery$data = {
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
  } | null;
};
export type illustrationQuery = {
  response: illustrationQuery$data;
  variables: illustrationQuery$variables;
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
    "cacheID": "ad29e20b0030497841d02fd155dcdc4d",
    "id": null,
    "metadata": {},
    "name": "illustrationQuery",
    "operationKind": "query",
    "text": "query illustrationQuery(\n  $opusNo: Int!\n) {\n  illustrationsCollection(where: {opusNo: $opusNo}, limit: 1) {\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      tag\n      listed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "45c65f1c257e3dffdb1d629994049593";

export default node;
