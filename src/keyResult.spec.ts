import { Test } from "@nestjs/testing";
import { KeyResultTesting } from "./keyResultTesting";

describe('keyResultTesting', function () {

  let keyResultTesting: KeyResultTesting;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [KeyResultTesting],
    }).compile();
    keyResultTesting = moduleRef.get(KeyResultTesting)
  });

  it('should return true if the value is 100 ', () => {
    const result = keyResultTesting.isKeyResultTesting(100);
    expect(result).toBe(true);
  });

});
