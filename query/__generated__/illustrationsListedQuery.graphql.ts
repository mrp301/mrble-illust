/**
 * @generated SignedSource<<c1afbab4b1329694f1aab6c8cd7b42c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type illustrationsListedQuery$variables = {};
export type illustrationsListedQuery$data = {
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
      readonly title: string | null;
    } | null>;
  } | null;
};
export type illustrationsListedQuery = {
  response: illustrationsListedQuery$data;
  variables: illustrationsListedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order",
        "value": "createDate_DESC"
      },
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "listed": true
        }
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
            "name": "listed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "illustrationsCollection(order:\"createDate_DESC\",where:{\"listed\":true})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "illustrationsListedQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "illustrationsListedQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "810f3688c374f64e73389f1af3ed9470",
    "id": null,
    "metadata": {},
    "name": "illustrationsListedQuery",
    "operationKind": "query",
    "text": "query illustrationsListedQuery {\n  illustrationsCollection(where: {listed: true}, order: createDate_DESC) {\n    items {\n      createDate\n      image {\n        url\n        width\n        height\n      }\n      opusNo\n      title\n      listed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b77856734c81e65956a1117be8196e4";

export default node;
