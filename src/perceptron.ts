import { randomInRange } from './randomInRange'

type TrainFunctionType = (inputs: Array<number>, target: number) => void
type GuessFunctionType = (inputs: Array<number>) => 1 | -1

/**
 * Receive inputs, compute a "guess" and train
 * The algorithm for calculating the change in weights:
 *      delta Weights = Error * Input * Learning rate
 */
export const perceptron: () => [train: TrainFunctionType, guess: GuessFunctionType, getWeights: () => Array<number>] = () => {
  /**
   * Generate random weights from [-1, 1) range
   */
  let weights: Array<number> = [...Array<number>(3)].map(() => (Math.round(randomInRange(-1, 1) * 100) / 100))

  /**
   * Learning rate
   */
  const learningRate = .01

  /**
   * Sums up the weighted inputs and applies the activation function (also called feed forward)
   * @param inputs
   */
  const guess: GuessFunctionType = inputs => sign(inputs.reduce((sum, cur, i) => sum + cur * weights[i], 0))

  /**
   * Adjust, tweak the weights based on the calculated error and learning rate
   * @param inputs
   * @param target
   */
  const train: TrainFunctionType = (inputs, target) => {
    const g = guess(inputs)
    const error = target - g

    weights = weights.map((w, i) => w + learningRate * error * inputs[i])
  }

  /**
   * Return the current weights
   */
  const getWeights = () => weights

  return [train, guess, getWeights]
}

/**
 * The activation function
 * @param sum
 */
const sign: (sum: number) => 1 | -1 = sum => sum > 0 ? 1 : -1
