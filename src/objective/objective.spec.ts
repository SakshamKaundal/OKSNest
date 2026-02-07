import { Test } from '@nestjs/testing';
import { ObjectiveService } from './objectives.service';
import { PrismaService } from '../prisma.service';

describe('ObjectiveService', () => {
  let objectiveService: ObjectiveService;

  const mockPrismaService = {
    objective: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ObjectiveService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();
    objectiveService = await module.resolve(ObjectiveService);
    // prismaService = module.get(PrismaService);
  });

  describe('findAll', () => {
    it('should return all objectives', async () => {
      const mockObjectives = [
        {
          id: '1',
          title: 'Objective 1',
        },
        {
          id: '2',
          title: 'Objective 2',
        },
      ];

      mockPrismaService.objective.findMany.mockResolvedValue(mockObjectives);
      const response = await objectiveService.findAll();

      expect(response).toEqual(mockObjectives);
      expect(mockPrismaService.objective.findMany).toHaveBeenCalledTimes(1);
    });
  });
  //
  // describe("create", () => {
  //   it("should reutrn the id of the object if objective is found", async () => {
  //     const mockObjective = {
  //       id: "1",
  //       title: "Objective 1"
  //     }
  //
  //     mockPrismaService.objective.findUnique.mockResolvedValue(mockObjective)
  //
  //     const mockKeyResult = {
  //       id: "1",
  //       description: "Key Result 1",
  //       progress: 90,
  //       objectiveId: "1",
  //       isCompleted: false
  //     }
  //
  //     mockPrismaService.keyResult.create.mockResolvedValue(mockKeyResult)
  //
  //     const response = await keyResultsService.create("1", {
  //       description: "Key Result 1",
  //       progress: 90,
  //     })
  //
  //     expect(response).toEqual(mockKeyResult)
  //     expect(mockPrismaService.objective.findUnique).toHaveBeenCalledTimes(1)
  //     expect(mockPrismaService.keyResult.create).toHaveBeenCalledTimes(1)
  //   })
  //
  //   it("should throw ObjectiveNotFoundException if objective is not found", async () => {
  //     mockPrismaService.objective.findUnique.mockResolvedValue(null);
  //
  //     await expect(keyResultsService.create("wrong-id", {
  //       description: "Key Result 1",
  //       progress: 90,
  //     })).rejects.toThrow(ObjectiveNotFoundException);
  //   })
  // })
  //
});
