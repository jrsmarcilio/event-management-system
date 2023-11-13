/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Group, Event, Person } from "@prisma/client";

export class GroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GroupCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupCountArgs>
  ): Promise<number> {
    return this.prisma.group.count(args);
  }

  async findMany<T extends Prisma.GroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupFindManyArgs>
  ): Promise<Group[]> {
    return this.prisma.group.findMany(args);
  }
  async findOne<T extends Prisma.GroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupFindUniqueArgs>
  ): Promise<Group | null> {
    return this.prisma.group.findUnique(args);
  }
  async create<T extends Prisma.GroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupCreateArgs>
  ): Promise<Group> {
    return this.prisma.group.create<T>(args);
  }
  async update<T extends Prisma.GroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupUpdateArgs>
  ): Promise<Group> {
    return this.prisma.group.update<T>(args);
  }
  async delete<T extends Prisma.GroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupDeleteArgs>
  ): Promise<Group> {
    return this.prisma.group.delete(args);
  }

  async findEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<Event[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .events(args);
  }

  async findPeople(
    parentId: string,
    args: Prisma.PersonFindManyArgs
  ): Promise<Person[]> {
    return this.prisma.group
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .people(args);
  }
}
