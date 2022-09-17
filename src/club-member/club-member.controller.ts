import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ClubDTO } from 'src/club/club.dto';
import { BusinessErrorsInterceptor } from '../shared/interceptors/interceptor';
import { ClubMemberService } from './club-member.service';
import { ClubMemberDTO } from '../club-member/club-member.dto';

@Controller('club-member')
@UseInterceptors(BusinessErrorsInterceptor)
export class ClubMemberController {
  constructor(private readonly cityRestaurantService: ClubMemberService) {}

  @Post('clubs/:clubId/members/:memberId')
  async addMemberToClub(
    @Param('clubId') cityId: string,
    @Param('memberId') memberId: string,
  ) {
    return await this.cityRestaurantService.associateClubMember(
      memberId,
      memberId,
    );
  }

  @Put('clubs/:clubId/members')
  async updateMembersFromClub(
    @Param('clubId') clubId: string,
    @Body() members: ClubMemberDTO[],
  ) {
    return await this.cityRestaurantService.updateMemberFromClub(
      clubId,
      members,
    );
  }

  @Get('clubs/:clubId/members')
  async findMembersFromClub(@Param('clubId') cityId: string) {
    return await this.cityRestaurantService.getClubMembers(cityId);
  }

  @Get('clubs/:clubId/members/:memberId')
  async findMemberFromClub(
    @Param('clubId') clubId: string,
    @Param('memberId') memberId: string,
  ) {
    return await this.cityRestaurantService.getMemberClub(clubId, memberId);
  }
}
