```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

  

// Data types - values and references

  

contract ValueTypes {

bool public b = true;

uint public u = 123;

  

int public i = -123;

  

int public minInt = type(int).min;

int public maxInt = type(int).max;

  

address public addr = 0xC8c2f80dB3dDEF79E35e8d1599Eac2221ee01868;
// 16진수 40개 = 20 바이트

bytes32 public b32 = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef; 
// 16진수 64개 = 32바이트

}
```