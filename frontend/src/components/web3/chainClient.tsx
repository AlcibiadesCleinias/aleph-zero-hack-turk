'use client'

import { FC, useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import GreeterContract from '@inkathon/contracts/typed-contracts/contracts/greeter'
import {
  contractQuery,
  contractTx,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { contractTxWithToast } from '@/utils/contract-tx-with-toast'

/// @dev Abstraction from the chain as it should be!
export class ContractClient {
  api: any
  activeAccount: any
  activeSigner: any
  typedContract: any
  contract: any
  contractAddress: any

  constructor(
    api: any,
    activeAccount: any,
    activeSigner: any,
    typedContract: any,
    contract: any,
    contractAddress: any,
  ) {
    this.api = api
    this.activeAccount = activeAccount
    this.activeSigner = activeSigner
    this.typedContract = typedContract
    this.contract = contract
    this.contractAddress = contractAddress
  }

  // Fetch Greeting.
  async fetchGreeting() {
    console.log('[ContractClient] fetchGreeting...')
    if (!this.contract || !this.typedContract || !this.api) return

    try {
      const result = await contractQuery(this.api, '', this.contract, 'greet')
      const { output, isError, decodedOutput } = decodeOutput(result, this.contract, 'greet')
      if (isError) throw new Error(decodedOutput)

      // Alternatively: Fetch it with typed contract instance
      const typedResult = await this.typedContract.query.greet()
      console.log('Result from typed contract: ', typedResult.value)
      return output
    } catch (e) {
      console.log('Error...')
      console.error(e)
    } finally {
      console.log('Finally...')
    }
  }

  // Update Greeting.
  async updateGreeting(newMessage: string) {
    const result = await contractTx(
      this.api,
      this.activeAccount.address,
      this.contract,
      'setMessage',
      {},
      [newMessage],
    )
    console.log('[ContractClient] send updateGreeting, got ', result)
    return result
  }
}
