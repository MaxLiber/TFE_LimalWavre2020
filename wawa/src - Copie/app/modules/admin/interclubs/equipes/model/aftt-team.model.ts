export class AfttTeamModel
{
    /*
    "TeamId":"4597-8",
    "Team":"",
    "DivisionId":4597,
    "DivisionName":"Beker van Belg vr 2 - National - Hommes",
    "DivisionCategory":1,
    "MatchType":5},
    */

   TeamId: string;
   Team: string;
   DivisionId: number;
   DivisionName: string;
   DivisionCategory: number;
   MatchType: number;
}

export class AfttClubTeamModel
{
    ClubName: string;
    TeamCount: number;
    TeamEntries: Array<AfttTeamModel>;
}

export class AfttTeamsApiGetResponse
{
    data: AfttClubTeamModel;
    err: any;
}

/*
Données suite à un test via postamn - 28/2/2020

{
"ClubName":"CTT Limal Wavre",
"TeamCount":41,
"TeamEntries":
[
	{"TeamId":"4597-8","Team":"","DivisionId":4597,"DivisionName":"Beker van Belg vr 2 - National - Hommes","DivisionCategory":1,"MatchType":5},
	{"TeamId":"4141-9","Team":"A","DivisionId":4141,"DivisionName":"Division 1A - National - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4238-9","Team":"B","DivisionId":4238,"DivisionName":"Série D - RegionIWB - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4284-7","Team":"C","DivisionId":4284,"DivisionName":"Division 1A - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4288-2","Team":"D","DivisionId":4288,"DivisionName":"Division 2C - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4287-10","Team":"E","DivisionId":4287,"DivisionName":"Division 2B - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4390-3","Team":"F","DivisionId":4390,"DivisionName":"Division 3A - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4391-10","Team":"G","DivisionId":4391,"DivisionName":"Division 3B - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4393-3","Team":"H","DivisionId":4393,"DivisionName":"Division 3D - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4399-7","Team":"I","DivisionId":4399,"DivisionName":"Division 4F - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4394-3","Team":"J","DivisionId":4394,"DivisionName":"Division 4A - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4405-4","Team":"K","DivisionId":4405,"DivisionName":"Division 5F - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4401-4","Team":"L","DivisionId":4401,"DivisionName":"Division 5B - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4409-10","Team":"M","DivisionId":4409,"DivisionName":"Division 5J Jeunes - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4400-9","Team":"N","DivisionId":4400,"DivisionName":"Division 5A - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4408-10","Team":"O","DivisionId":4408,"DivisionName":"Division 5I Jeunes - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4409-8","Team":"P","DivisionId":4409,"DivisionName":"Division 5J Jeunes - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4408-4","Team":"Q","DivisionId":4408,"DivisionName":"Division 5I Jeunes - Prov. B.B.W. - Hommes","DivisionCategory":1,"MatchType":2},
	{"TeamId":"4280-2","Team":"A","DivisionId":4280,"DivisionName":"Division 1 - Prov. B.B.W. - Dames","DivisionCategory":2,"MatchType":4},
	{"TeamId":"4280-4","Team":"B","DivisionId":4280,"DivisionName":"Division 1 - Prov. B.B.W. - Dames","DivisionCategory":2,"MatchType":4},
	{"TeamId":"4281-9","Team":"C","DivisionId":4281,"DivisionName":"Division 2 - Prov. B.B.W. - Dames","DivisionCategory":2,"MatchType":4},
	{"TeamId":"4558-1","Team":"A","DivisionId":4558,"DivisionName":"Division 1 Super - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4560-1","Team":"B","DivisionId":4560,"DivisionName":"Division 2B - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4565-1","Team":"C","DivisionId":4565,"DivisionName":"Division 4C - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4566-6","Team":"D","DivisionId":4566,"DivisionName":"Division 4D - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4570-6","Team":"E","DivisionId":4570,"DivisionName":"Division 5D - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4568-6","Team":"F","DivisionId":4568,"DivisionName":"Division 5B - Prov. B.B.W. - Vétérans","DivisionCategory":3,"MatchType":4},
	{"TeamId":"4572-1","Team":"A","DivisionId":4572,"DivisionName":"Division 1 Super - Prov. B.B.W. - Aînées","DivisionCategory":4,"MatchType":4},
	{"TeamId":"4572-6","Team":"B","DivisionId":4572,"DivisionName":"Division 1 Super - Prov. B.B.W. - Aînées","DivisionCategory":4,"MatchType":4},
	{"TeamId":"4636-4","Team":"1","DivisionId":4636,"DivisionName":"Découverte Poule B - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4647-2","Team":"A","DivisionId":4647,"DivisionName":"Qualif Préminimes Poule 2 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4649-1","Team":"A","DivisionId":4649,"DivisionName":"Finale Poussins Garçons - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4645-1","Team":"A","DivisionId":4645,"DivisionName":"Qualif Cadets Poule 5 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4649-6","Team":"B","DivisionId":4649,"DivisionName":"Finale Poussins Garçons - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4644-3","Team":"B","DivisionId":4644,"DivisionName":"Qualif Cadets Poule 4 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4654-1","Team":"B","DivisionId":4654,"DivisionName":"Qualif Minimes Poule 1 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4656-3","Team":"C","DivisionId":4656,"DivisionName":"Qualif Minimes Poule 3 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4649-7","Team":"C","DivisionId":4649,"DivisionName":"Finale Poussins Garçons - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4657-3","Team":"D","DivisionId":4657,"DivisionName":"Qualif Minimes Poule 4 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4654-3","Team":"E","DivisionId":4654,"DivisionName":"Qualif Minimes Poule 1 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4},
	{"TeamId":"4655-3","Team":"F","DivisionId":4655,"DivisionName":"Qualif Minimes Poule 2 - Prov. B.B.W. - Jeunes","DivisionCategory":13,"MatchType":4}
]
}

*/
