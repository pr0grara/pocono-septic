/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'stroudsburg',
    name: 'Stroudsburg',
    state: 'PA',
    intro:
      'Stroudsburg is the seat of Monroe County, a borough built around a historic Main Street where the Pocono Mountains meet the I-80 corridor and the gateway to the Delaware Water Gap. The older borough blocks have sewer, but step past them and much of greater Stroudsburg runs on septic — the homes out toward Stroud Township, the rural properties climbing away from the McMichael and Brodhead creeks, and the mix of long-owned houses and newer builds spread across the hillsides. We pump, clean, repair, and inspect residential septic systems all over the Stroudsburg area. The local pattern is its own thing: older borough-edge homes with tanks that have been in the ground for decades and no service records, plus rural systems working in the rocky, shale-heavy soil this part of the Poconos is known for. We see overdue tanks on properties that changed hands quietly, drain fields that struggle after a wet stretch, and systems that need a straight look before a house sells. We know the ground here, how to find a buried tank without tearing up a yard, and how to read whether a soggy spot is a fixable problem or a failing field. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Stroud Township', 'Bartonsville', 'Snydersville', 'Analomink', 'East Stroud', 'Shafers Schoolhouse'],
    landmarks: ['Historic Main Street', 'Delaware Water Gap NRA', 'Brodhead Creek', 'Monroe County Courthouse'],
    issues: [
      {
        title: 'Older borough-edge systems with no records',
        body: 'Many homes around Stroudsburg’s historic core and the older streets of Stroud Township have septic tanks that have sat in the ground for decades, often undersized and with no record of the last service. These older systems need pumping and an honest look at the tank and baffles before a small problem turns into a field failure.',
      },
      {
        title: 'Rocky, shale-heavy Pocono soil',
        body: 'The ground around Stroudsburg runs to shale and rock that drains slowly, which is hard on a drain field — especially after the wet stretches this stretch of the Poconos gets. Keeping the tank pumped so solids never reach the field is the best protection for a field working in tough soil.',
      },
      {
        title: 'Homes selling along the I-80 corridor',
        body: 'Stroudsburg is a busy resale market, and homes near the borough and out toward Bartonsville often change hands with no septic history at all. A pump and inspection gives a buyer a real picture and a seller clean proof, so the system doesn’t become a last-minute problem in the deal.',
      },
    ],
    nearby: ['east-stroudsburg', 'mount-pocono', 'bushkill'],
    faqs: [
      {
        q: 'Do you cover all of the Stroudsburg area?',
        a: 'Yes. We cover Stroudsburg borough and the surrounding Stroud Township country — Bartonsville, Snydersville, Analomink, and the rural properties spread across the hillsides toward the Water Gap. If you’re not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'I just bought an older home near Stroudsburg — what should I do first?',
        a: 'Have the tank pumped and the system inspected. Older borough-edge homes here often have no service record, and starting with a pump and a look at the tank, baffles, and drain field gives you a known baseline and catches trouble before it becomes expensive.',
      },
      {
        q: 'My drains are slow after it rains — is that the septic?',
        a: 'It can be. In the rocky, shale soils common around Stroudsburg, a drain field that’s full or aging struggles to absorb water when the ground is already saturated, and that shows up as slow drains. We’ll check whether it’s a full tank, a line, or the field itself and tell you straight what it needs.',
      },
    ],
  },
  {
    slug: 'east-stroudsburg',
    name: 'East Stroudsburg',
    state: 'PA',
    intro:
      'East Stroudsburg sits across the Brodhead from its sister borough, built around East Stroudsburg University and the Dansbury neighborhood, with quick access to the Delaware Water Gap just down the road. The university and the older borough blocks bring a heavy mix of student and seasonal rentals, and while the town center has sewer, plenty of the surrounding homes — out toward Marshalls Creek, Middle Smithfield, and the rentals scattered up the hillsides — run on septic. We pump, clean, repair, and inspect residential septic systems all over the East Stroudsburg area. The rental churn here is the story: student houses and short-term rentals that go from empty to a full house and back, loading a tank in bursts that fill it far faster than the old every-few-years rule assumes. Add older systems near the university, rocky Pocono soil, and second homes that sit quiet between visits, and you have tanks that need attention on a real schedule. We know the Dansbury and Marshalls Creek area, how heavy rental use stresses a system, and how to find and service a tank without tearing up a yard. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Dansbury', 'Marshalls Creek', 'Middle Smithfield', 'Bushkill Falls Road', 'Smithfield', 'Zion Church'],
    landmarks: ['East Stroudsburg University', 'Delaware Water Gap NRA', 'Dansbury Park', 'Brodhead Creek'],
    issues: [
      {
        title: 'Student and short-term rentals that fill tanks fast',
        body: 'With the university in town, East Stroudsburg has a lot of student houses and short-term rentals that go from empty to a packed house every weekend. That bursty, heavy use fills a septic tank faster than a normal household, so rentals need pumping more often than the standard interval — and an overlooked rental tank is a backup waiting to happen.',
      },
      {
        title: 'Aging systems near the borough core',
        body: 'The older streets around Dansbury and the university have homes with tanks decades old, often converted or expanded into rentals without anyone touching the septic. Regular pumping and a look at the tank and baffles keep these older systems from washing solids into the drain field.',
      },
      {
        title: 'Second homes that sit empty, then fill up',
        body: 'A lot of the properties out toward Marshalls Creek and Middle Smithfield are seasonal, sitting quiet for stretches and then hosting a full house. That on-off pattern is hard on a system and makes it easy to forget pumping until there’s a problem during a stay.',
      },
    ],
    nearby: ['stroudsburg', 'mount-pocono', 'bushkill'],
    faqs: [
      {
        q: 'Do you serve East Stroudsburg and Marshalls Creek?',
        a: 'Yes. We cover East Stroudsburg borough, the Dansbury area, and out toward Marshalls Creek, Middle Smithfield, and Smithfield. Tell us where the property is and we’ll confirm and come prepared for the access.',
      },
      {
        q: 'I rent to students in East Stroudsburg — how often should I pump?',
        a: 'More often than a normal home. Student and short-term rentals see heavy, bursty use, so depending on the number of tenants and turnover many need pumping every one to three years rather than the usual three to five. We can look at your tank and the way the house is used and set a schedule that keeps you from a backup mid-lease.',
      },
      {
        q: 'My rental has a septic tank I’ve never touched — is that a problem?',
        a: 'It can be. Rental tanks near the university get heavy use and are easy to forget, and a tank that’s never been pumped is overdue. We’ll pump it, check the tank and baffles, and set a realistic schedule so a full house doesn’t end in a backup.',
      },
    ],
  },
  {
    slug: 'mount-pocono',
    name: 'Mount Pocono',
    state: 'PA',
    intro:
      'Mount Pocono is the resort hub of the region, a small borough sitting high on the plateau near Pocono Raceway and the big waterpark resorts — Kalahari and Great Wolf Lodge — with a tourist strip that draws weekend traffic straight off Route 611. The core has some sewer, but the surrounding homes and the dense pocket of short-term rentals that fill up around the raceway and the resorts run heavily on septic. We pump, clean, repair, and inspect residential septic systems throughout the Mount Pocono area. Tourism drives the pattern here more than anywhere: rental homes that go from empty to a packed house every weekend, especially on race weekends, loading tanks in bursts that fill them far faster than a normal household. Add the elevation — hard winters that freeze shallow lines and exposed pump parts at homes left empty and unheated — plus rocky plateau soil and older systems near the strip, and you have tanks that need real attention. We know the resort-town rhythm, how bursty rental use stresses a system, and how to find and service a tank without tearing up a yard. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Pocono Summit', 'Scotrun', 'Swiftwater', 'Tunkhannock Township', 'Coolbaugh Township', 'Pocono Farms'],
    landmarks: ['Pocono Raceway', 'Kalahari Resorts', 'Great Wolf Lodge', 'Route 611 tourist strip'],
    issues: [
      {
        title: 'Short-term rentals that fill tanks in bursts',
        body: 'Mount Pocono’s resort trade means a lot of homes go from empty to a full house every weekend, and race weekends can pack them tighter still. That bursty, heavy use fills a septic tank far faster than a normal household, so rentals need pumping on a much shorter interval — and an overlooked rental tank is a backup waiting to happen during a booking.',
      },
      {
        title: 'Freezing at homes left empty in winter',
        body: 'Up on the plateau at Mount Pocono’s elevation, shallow lines and exposed pump components can freeze in a hard winter, especially at a rental or second home sitting unheated between bookings. We can check the vulnerable spots and advise on protecting a system through the cold months.',
      },
      {
        title: 'Older systems near the tourist strip',
        body: 'Homes and converted properties near the Route 611 strip often have older, undersized tanks pressed into heavier use than they were built for. Regular pumping and an honest look at the tank keep these systems from washing solids into the drain field.',
      },
    ],
    nearby: ['tobyhanna', 'pocono-pines', 'stroudsburg'],
    faqs: [
      {
        q: 'Do you cover Mount Pocono and the resort area?',
        a: 'Yes. We cover Mount Pocono borough and the surrounding communities — Pocono Summit, Scotrun, Swiftwater, and the areas around the raceway and the resorts. Tell us where the property is and we’ll confirm and come prepared.',
      },
      {
        q: 'I run a short-term rental near the raceway — how often should I pump?',
        a: 'More often than a normal home. Rentals here see heavy, bursty use, and a race or resort weekend can load a tank hard, so depending on size and turnover many need pumping every one to three years rather than the usual three to five. We can set a schedule to your booking pattern so you avoid a backup during a guest’s stay.',
      },
      {
        q: 'My rental sits empty between bookings in winter — should I worry about freezing?',
        a: 'At Mount Pocono’s elevation, yes. Shallow lines and exposed pump parts can freeze on an unheated home between guests. We can look at the vulnerable spots, advise on protecting the system, and make sure the tank is in good shape before the cold sets in.',
      },
    ],
  },
  {
    slug: 'tobyhanna',
    name: 'Tobyhanna',
    state: 'PA',
    intro:
      'Tobyhanna sits on the high plateau of northern Monroe County, known for Tobyhanna State Park, the Army Depot, and — for septic work — A Pocono Country Place, one of the largest private gated communities in the Poconos, where nearly every home sits on its own septic tank and drain field. The lakes and wooded lots that fill this part of the plateau mean septic is not the exception here, it’s the rule. We pump, clean, repair, and inspect residential septic systems throughout the Tobyhanna area. The gated-community density is the whole story: thousands of homes on individual systems, many of them second homes and weekend rentals that sit quiet then fill up, with tanks buried in wooded lots and no service records passed along from owner to owner. Add the plateau elevation and its hard winters that freeze shallow lines at unheated homes, plus rocky soil and high water tables near the community lakes, and you have systems that need a schedule and a straight eye. We know A Pocono Country Place and the surrounding lakes, how to find an unmarked tank in a wooded development, and how to service it cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['A Pocono Country Place', 'Coolbaugh Township', 'Pocono Summit', 'Tobyhanna Township', 'Emerald Lakes', 'Lake of the Pines'],
    landmarks: ['Tobyhanna State Park', 'Tobyhanna Army Depot', 'A Pocono Country Place', 'Tobyhanna Lake'],
    issues: [
      {
        title: 'Gated-community septic density',
        body: 'A Pocono Country Place alone holds thousands of homes, nearly all on individual septic tanks and drain fields on wooded lots. In a development this size, tanks get buried and forgotten between owners, and a full or failing system is easy to overlook. Regular pumping and knowing exactly where your tank sits are the difference between a quiet system and a backup.',
      },
      {
        title: 'Unmarked tanks in wooded developments',
        body: 'Across Tobyhanna’s gated communities, tanks were installed decades ago on tree-covered lots and change hands with no records of where the lid is. We locate and dig to the tank as part of the job and can map it so the next service is quick.',
      },
      {
        title: 'Second homes and freezing on the plateau',
        body: 'Many homes here are weekend and second homes that sit empty then fill up, on a plateau where hard winters can freeze shallow lines and exposed pump parts at an unheated house. A pumping schedule matched to actual use, plus a check on the vulnerable spots before winter, keeps a quiet system from becoming an emergency.',
      },
    ],
    nearby: ['pocono-pines', 'mount-pocono', 'albrightsville'],
    faqs: [
      {
        q: 'Do you serve A Pocono Country Place and the Tobyhanna area?',
        a: 'Yes. We work all through A Pocono Country Place and the surrounding Coolbaugh and Tobyhanna Township communities, including Emerald Lakes and the plateau lakes. Tell us your section and lot and we’ll come prepared for the access.',
      },
      {
        q: 'Nobody told me where my tank is in the community — can you find it?',
        a: 'Yes. Unmarked, buried tanks are the norm in these gated developments. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
      {
        q: 'We only use our place in the community on weekends — how often should we pump?',
        a: 'It depends on how heavily it’s used when you’re there, but weekend and second homes in these communities are easy to neglect. We can set a schedule based on your actual use and check the system before a busy season so you’re not dealing with a backup during a visit.',
      },
    ],
  },
  {
    slug: 'pocono-pines',
    name: 'Pocono Pines',
    state: 'PA',
    intro:
      'Pocono Pines sits in the heart of the plateau’s lake country in Tobyhanna Township, home to the Lake Naomi and Timber Trails private community and next door to the Pocono Lake communities — some of the most sought-after second-home and lake-house country in the Poconos. Nearly every home out here sits on its own septic system, and a great many of them are lakefront or lake-view. We pump, clean, repair, and inspect residential septic systems throughout the Pocono Pines area. The lakes are the whole challenge: homes packed around Lake Naomi and Pocono Lake sit close to water, over seasonal high water tables that leave a drain field little dry soil to work with, especially through a wet spring. Add the second-home rhythm — houses that sit empty then fill with a full family for a lake weekend — plus wooded lots with unmarked tanks and hard plateau winters, and you have systems that need a real schedule and an honest eye. We know Lake Naomi, Timber Trails, and the Pocono Lake communities, how a high water table stresses a lakefront field, and how to service a tank cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Lake Naomi', 'Timber Trails', 'Pocono Lake', 'Pocono Lake Preserve', 'Lake Naomi Estates', 'Tobyhanna Township'],
    landmarks: ['Lake Naomi', 'Pocono Lake', 'Tobyhanna Creek', 'Naomi Village'],
    issues: [
      {
        title: 'Lakefront lots and high water tables',
        body: 'Homes packed around Lake Naomi and Pocono Lake sit close to the water, and a seasonal high water table leaves a drain field little dry soil to absorb effluent — especially through a wet spring. Fields here are sensitive to overload, so pumping on schedule and keeping extra runoff off the field is especially important.',
      },
      {
        title: 'Second and lake homes with bursty loads',
        body: 'A lot of Pocono Pines is second homes and lake houses that sit quiet, then fill with a full family for a weekend at the lake. That empty-then-full pattern loads a tank in bursts and is easy to forget, so a system can be neglected right up until there’s a problem during a stay.',
      },
      {
        title: 'Unmarked tanks on wooded community lots',
        body: 'Homes in the Lake Naomi and Timber Trails communities often have tanks buried on tree-covered lots with no records passed between owners. We locate and dig to the tank as part of the job and can map it so the next service is quick.',
      },
    ],
    nearby: ['tobyhanna', 'mount-pocono', 'albrightsville'],
    faqs: [
      {
        q: 'Do you cover Lake Naomi and the Pocono Pines communities?',
        a: 'Yes. We work all through Lake Naomi, Timber Trails, and the Pocono Lake communities in Tobyhanna Township. Tell us your section and lot and how the access looks and we’ll come prepared.',
      },
      {
        q: 'My house is right on the lake — does the water table affect my septic?',
        a: 'It can. Lakefront and lake-view lots here often sit over a seasonal high water table, which leaves a drain field less dry soil to absorb effluent, so fields near the water are more sensitive to overload — especially in a wet spring. Pumping on schedule and keeping extra runoff off the field helps protect it.',
      },
      {
        q: 'We only use our lake house part of the year — how often should we pump?',
        a: 'It depends on how heavily it’s used when you’re there, but lake and second homes are easy to neglect between visits. We can set a schedule based on your actual use and check the system before a busy season so you’re not facing a backup while family is at the lake.',
      },
    ],
  },
  {
    slug: 'bushkill',
    name: 'Bushkill',
    state: 'PA',
    intro:
      'Bushkill sits in southern Pike County along the Delaware Water Gap, known as "The Falls" for Bushkill Falls, with the Fernwood resort nearby and — for septic work — Saw Creek Estates, a large gated resort community where every home runs on its own septic system. Outside the small commercial pockets, this is septic country through and through. We pump, clean, repair, and inspect residential septic systems throughout the Bushkill area. Saw Creek and the surrounding developments set the pattern: thousands of homes on individual tanks and drain fields, a heavy share of them second homes and vacation rentals drawing weekend traffic from the city, filling tanks in bursts then sitting quiet. Add wooded lots with unmarked, buried tanks, rocky soil sloping down toward the Delaware, and hard winters that freeze shallow lines at unheated homes, and you have systems that need a real schedule and an honest eye. We know Saw Creek Estates, Fernwood, and the country around the Falls, how to find a tank on a wooded resort lot, and how to service it cleanly without tearing up a yard. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Saw Creek Estates', 'Fernwood', 'Pocono Mountain Woodland Lakes', 'Winona Lakes', 'Lehman Township', 'Bushkill Falls'],
    landmarks: ['Bushkill Falls', 'Delaware Water Gap NRA', 'Fernwood Resort', 'Saw Creek Estates'],
    issues: [
      {
        title: 'Gated-resort septic density',
        body: 'Saw Creek Estates and the surrounding developments hold thousands of homes, every one on its own septic tank and drain field on a wooded lot. In a resort community this size, a heavy share are rentals and second homes, and a full or failing system is easy to overlook. Regular pumping and knowing exactly where your tank sits keep a quiet system from becoming a backup.',
      },
      {
        title: 'Vacation rentals that fill tanks in bursts',
        body: 'Bushkill draws heavy weekend traffic from the city, and a lot of homes in Saw Creek and around the Falls go from empty to a packed house and back. That bursty use fills a tank far faster than a normal household, so rentals need pumping on a shorter interval than the standard rule assumes.',
      },
      {
        title: 'Unmarked tanks on wooded resort lots',
        body: 'Homes across Bushkill’s gated communities were built on tree-covered lots with tanks buried and no records passed between owners. We locate and dig to the tank as part of the job and can map it so the next service is quick.',
      },
    ],
    nearby: ['dingmans-ferry', 'milford', 'east-stroudsburg'],
    faqs: [
      {
        q: 'Do you serve Saw Creek Estates and the Bushkill area?',
        a: 'Yes. We work all through Saw Creek Estates, Fernwood, and the surrounding Lehman Township communities near the Falls. Tell us your section and lot and how the access looks and we’ll come prepared.',
      },
      {
        q: 'I bought a place in Saw Creek and don’t know where the tank is — can you find it?',
        a: 'Yes. Unmarked, buried tanks are the norm in these resort communities. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
      {
        q: 'I rent my Bushkill place on weekends — how often should I pump?',
        a: 'More often than a normal home. Weekend rentals here see heavy, bursty use, so depending on size and turnover many need pumping every one to three years rather than the usual three to five. We can set a schedule to your booking pattern so you avoid a backup during a guest’s stay.',
      },
    ],
  },
  {
    slug: 'milford',
    name: 'Milford',
    state: 'PA',
    intro:
      'Milford is the seat of Pike County, a historic borough on the Delaware River known for Grey Towers National Historic Site and the Upper Delaware scenic corridor, with a walkable downtown of long-standing homes and businesses. The borough core has some sewer, but many of Milford’s older homes and nearly all of the surrounding township country run on septic — the properties out through Milford Township, Dingman, and the wooded lots climbing away from the river. We pump, clean, repair, and inspect residential septic systems throughout the Milford area. The older borough systems are much of the story here: homes near the historic downtown with tanks that have been in the ground for generations, often undersized and with no service record. Add tourism traffic from the Grey Towers and Delaware River draw, seasonal and second homes along the scenic corridor, and rocky, sloping soil near the river, and you have systems that need a straight look before trouble starts. We know historic Milford, how its older homes and the river corridor handle a system, and how to find and service a tank without tearing up a yard. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Milford Township', 'Dingman Township', 'Matamoras', 'Westfall', 'Twin Lakes', 'Sawkill'],
    landmarks: ['Grey Towers National Historic Site', 'Delaware River', 'Upper Delaware Scenic Corridor', 'Historic Milford downtown'],
    issues: [
      {
        title: 'Older borough systems',
        body: 'Milford’s historic downtown and the streets around it have homes with septic tanks that have been in the ground for generations, often undersized for a modern household and with no record of the last service. These older systems need pumping and an honest look at the tank and baffles before a small problem turns into a field failure.',
      },
      {
        title: 'Seasonal homes along the river corridor',
        body: 'The Upper Delaware scenic corridor draws seasonal and second homes that sit quiet then fill with a full house for a weekend on the river. That empty-then-full pattern is easy to forget, so a system can go neglected right up until there’s a problem during a stay.',
      },
      {
        title: 'Rocky, sloping soil near the Delaware',
        body: 'Lots climbing away from the river run to rock and slope, which leaves a drain field working in tough ground that saturates after a wet stretch. Keeping the tank pumped and runoff diverted away from the field is the best protection here.',
      },
    ],
    nearby: ['dingmans-ferry', 'bushkill', 'lake-ariel'],
    faqs: [
      {
        q: 'Do you cover Milford and Pike County?',
        a: 'Yes. We cover Milford borough and the surrounding Milford and Dingman Township country, out toward Matamoras, Westfall, and the wooded lots along the river corridor. If you’re not sure you’re in our area, call and ask.',
      },
      {
        q: 'I own an older home in historic Milford — how do I know my tank is okay?',
        a: 'The honest answer is to have it pumped and inspected. Older borough homes here often have generations-old tanks with no service record, and a pump plus a look at the tank, baffles, and field gives you a known baseline and catches trouble before it becomes expensive.',
      },
      {
        q: 'My drains are slow after heavy rain — is that the septic?',
        a: 'It can be. On the rocky, sloping lots near the river, a drain field that’s full or aging struggles to absorb water when the ground is already saturated, and that shows up as slow drains. We’ll check whether it’s a full tank, a line, or the field itself and tell you straight what it needs.',
      },
    ],
  },
  {
    slug: 'dingmans-ferry',
    name: 'Dingmans Ferry',
    state: 'PA',
    intro:
      'Dingmans Ferry sits along the Delaware River in Pike County, known for Dingmans Falls and the wooded, rural lots that spread back from the water into the Delaware Water Gap country. This is thoroughly septic territory — there’s little sewer out here, and the homes range from long-owned river-country houses to the lake and mountain communities like Wild Acres and Pocono Mountain Lake Estates, nearly all on their own systems. We pump, clean, repair, and inspect residential septic systems throughout the Dingmans Ferry area. The pattern here is rural and wooded: tanks buried on tree-covered lots with no records, drain fields working in rocky soil, and a heavy share of second homes and community properties that sit quiet then fill with a full house for a weekend. Add the private communities, where nearly every home is on septic and lots run deep into the woods, plus hard winters that freeze shallow lines at unheated homes, and you have systems that need a real schedule and a straight eye. We know Wild Acres, Pocono Mountain Lake, and the river country around the Falls, and how to find a tank in the woods and service it cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Wild Acres', 'Pocono Mountain Lake Estates', 'Delaware Township', 'Gold Key Lake', 'Marcel Lake', 'Sunrise Lake'],
    landmarks: ['Dingmans Falls', 'Delaware River', 'Delaware Water Gap NRA', 'George W. Childs Park'],
    issues: [
      {
        title: 'Unmarked tanks on deep wooded lots',
        body: 'Dingmans Ferry is rural, wooded country, and tanks were installed decades ago on tree-covered lots that change hands with no record of where the lid is. We locate and dig to the tank as part of the job and can map it so the next service is quick.',
      },
      {
        title: 'Lake and mountain community septic',
        body: 'Communities like Wild Acres and Pocono Mountain Lake Estates put nearly every home on its own septic tank and drain field, many of them second homes on wooded lots. A full or failing system is easy to overlook in a development this spread out, so regular pumping and knowing where your tank sits keep a quiet system from becoming a backup.',
      },
      {
        title: 'Second homes and winter freezing',
        body: 'A lot of homes here are weekend and second homes that sit empty then fill up, and hard river-country winters can freeze shallow lines and exposed pump parts at an unheated house. A pumping schedule matched to actual use, plus a check on the vulnerable spots before winter, keeps a system from turning into an emergency.',
      },
    ],
    nearby: ['milford', 'bushkill', 'lake-ariel'],
    faqs: [
      {
        q: 'Do you serve Dingmans Ferry and the lake communities?',
        a: 'Yes. We cover Dingmans Ferry and the surrounding Delaware Township country, including Wild Acres, Pocono Mountain Lake Estates, and the lake communities. Tell us your section and lot and how the access looks and we’ll come prepared.',
      },
      {
        q: 'My lot is deep in the woods and I can’t find the tank — can you?',
        a: 'Yes. Unmarked, buried tanks are the norm out here. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
      {
        q: 'We only use our place on weekends — should I worry about the septic in winter?',
        a: 'Out here, yes. At a home left empty and unheated, shallow lines and exposed pump parts can freeze in a hard winter. We can look at the vulnerable spots, advise on protecting the system, and make sure the tank is in good shape before the cold sets in.',
      },
    ],
  },
  {
    slug: 'lake-ariel',
    name: 'Lake Ariel',
    state: 'PA',
    intro:
      'Lake Ariel sits in Wayne County near the western edge of the Poconos, best known for The Hideout — a large private gated community where every home is on its own septic — and for its closeness to Lake Wallenpaupack, the region’s biggest lake. This is second-home and vacation-property country, and outside the small crossroads there’s little sewer; septic is how nearly everyone here handles wastewater. We pump, clean, repair, and inspect residential septic systems throughout the Lake Ariel area. The Hideout sets much of the pattern: thousands of homes on individual tanks and drain fields on wooded lots, a heavy share of them vacation and weekend homes that sit quiet then fill up. Add the lake country — homes near the water sitting over seasonal high water tables that leave a drain field little dry soil to work with — plus unmarked buried tanks and hard winters that freeze shallow lines at empty homes, and you have systems that need a real schedule and an honest eye. We know The Hideout and the Wallenpaupack area, how a high water table stresses a lakefront field, and how to find and service a tank cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['The Hideout', 'Lake Township', 'Salem Township', 'Hamlin', 'Maple Lake', 'Jones Lake'],
    landmarks: ['The Hideout', 'Lake Wallenpaupack', 'Lake Ariel', 'Wallenpaupack Creek'],
    issues: [
      {
        title: 'The Hideout and gated-community septic',
        body: 'The Hideout alone holds thousands of homes, nearly all on individual septic tanks and drain fields on wooded lots, and a heavy share are vacation and weekend homes. In a community this size, a tank is easy to forget between owners, and a full or failing system goes unnoticed until it backs up. Regular pumping and knowing where your tank sits are the difference.',
      },
      {
        title: 'Lake-area high water tables',
        body: 'Homes near Lake Wallenpaupack and the smaller community lakes can sit over a seasonal high water table, which leaves a drain field little dry soil to absorb effluent. Fields here are sensitive to overload, so pumping on schedule and keeping extra runoff off the field is especially important where the ground stays damp.',
      },
      {
        title: 'Vacation homes that sit empty, then fill up',
        body: 'A lot of Lake Ariel is second and vacation homes that sit quiet then fill with a full family for a lake weekend. That empty-then-full pattern loads a tank in bursts and is easy to forget, so a system can be neglected right up until there’s a problem during a stay.',
      },
    ],
    nearby: ['hawley', 'milford', 'dingmans-ferry'],
    faqs: [
      {
        q: 'Do you cover The Hideout and the Lake Ariel area?',
        a: 'Yes. We work all through The Hideout and the surrounding Lake and Salem Township country near Wallenpaupack, out toward Hamlin. Tell us your section and lot and how the access looks and we’ll come prepared.',
      },
      {
        q: 'I don’t know where my tank is in The Hideout — can you find it?',
        a: 'Yes. Unmarked, buried tanks are common in these gated communities. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
      {
        q: 'My place is near Wallenpaupack — does the water table affect my septic?',
        a: 'It can. Homes near the lake and the smaller community lakes may sit over a higher water table, which leaves a drain field less dry soil to absorb effluent, so fields there are more sensitive to overload. Pumping on schedule and keeping extra runoff off the field helps protect it.',
      },
    ],
  },
  {
    slug: 'hawley',
    name: 'Hawley',
    state: 'PA',
    intro:
      'Hawley is a historic Wayne County borough at the gateway to Lake Wallenpaupack, the largest lake in the region, with a walkable downtown of old mill buildings and a heavy trade in tourism and lake-house rentals. The borough core has some sewer, but the lake homes ringing Wallenpaupack and the surrounding township country run on septic — the vacation houses, the rentals, and the long-owned homes climbing away from the water. We pump, clean, repair, and inspect residential septic systems throughout the Hawley area. The lake is the whole story here: homes packed around Wallenpaupack sit close to the water over seasonal high water tables that leave a drain field little dry soil to work with, and a great many are rentals and second homes that go from empty to a full house for a lake weekend. Add the historic borough’s older systems and hard winters that freeze shallow lines at empty homes, and you have systems that need a real schedule and a straight eye. We know Wallenpaupack, the lake communities, and downtown Hawley, how a high water table stresses a lakefront field, and how to service a tank cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Lake Wallenpaupack', 'Palmyra Township', 'Paupack', 'Tafton', 'Wilsonville', 'Hawley borough'],
    landmarks: ['Lake Wallenpaupack', 'Historic downtown Hawley', 'Lacawac Sanctuary', 'Wallenpaupack Dam'],
    issues: [
      {
        title: 'Lakefront lots and high water tables',
        body: 'Homes packed around Lake Wallenpaupack sit close to the water, and a seasonal high water table leaves a drain field little dry soil to absorb effluent — especially through a wet spring. Fields near the lake are sensitive to overload, so pumping on schedule and keeping extra runoff off the field is especially important here.',
      },
      {
        title: 'Lake-house rentals with bursty loads',
        body: 'Hawley’s tourism trade fills a lot of homes around Wallenpaupack with weekend renters, going from empty to a packed house and back. That bursty use fills a septic tank far faster than a normal household, so rentals need pumping on a shorter interval than the standard rule assumes.',
      },
      {
        title: 'Older systems in the historic borough',
        body: 'Downtown Hawley and the older streets around it have homes with tanks that have been in the ground for decades, often undersized and with no service record. Regular pumping and an honest look at the tank keep these older systems from washing solids into the drain field.',
      },
    ],
    nearby: ['lake-ariel', 'milford', 'jim-thorpe'],
    faqs: [
      {
        q: 'Do you cover Hawley and the Lake Wallenpaupack area?',
        a: 'Yes. We cover Hawley borough and the surrounding Palmyra Township and lake country — Paupack, Tafton, Wilsonville, and the homes ringing Wallenpaupack. Tell us where the property is and how the access looks and we’ll come prepared.',
      },
      {
        q: 'My house is right on Wallenpaupack — does the water table affect my septic?',
        a: 'It can. Lakefront and lake-view lots here often sit over a seasonal high water table, which leaves a drain field less dry soil to absorb effluent, so fields near the water are more sensitive to overload — especially in a wet spring. Pumping on schedule and keeping extra runoff off the field helps protect it.',
      },
      {
        q: 'I rent my lake house on weekends — how often should I pump?',
        a: 'More often than a normal home. Weekend lake rentals see heavy, bursty use, so depending on size and turnover many need pumping every one to three years rather than the usual three to five. We can set a schedule to your booking pattern so you avoid a backup during a guest’s stay.',
      },
    ],
  },
  {
    slug: 'jim-thorpe',
    name: 'Jim Thorpe',
    state: 'PA',
    intro:
      'Jim Thorpe is the seat of Carbon County, a historic tourist town nicknamed the "Switzerland of America" for the way its Victorian downtown climbs the steep hills above the Lehigh River, with Lehigh Gorge State Park, mountain biking, and whitewater rafting drawing heavy weekend traffic. The old downtown has sewer, but the homes climbing the surrounding ridges and the growing pocket of short-term rentals up the hillsides run on septic. We pump, clean, repair, and inspect residential septic systems throughout the Jim Thorpe area. The town’s two-sided nature is the story: older borough-edge homes with tanks that have been in the ground for generations, sitting on steep Victorian-era lots, plus a wave of short-term rentals feeding the tourist trade that fill tanks in bursts. Add the steep grades — where systems often use a pump to push effluent uphill to a field — and rocky mountain soil, and you have systems that need a straight eye. We know historic Jim Thorpe, the ridges around the gorge, how grade and bursty rental use stress a system, and how to find and service a tank on a steep lot. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['East Jim Thorpe', 'Penn Forest Township', 'Kidder Township', 'Mauch Chunk', 'Lake Harmony', 'Jim Thorpe borough'],
    landmarks: ['Lehigh Gorge State Park', 'Historic downtown Jim Thorpe', 'Lehigh River', 'Mauch Chunk Lake'],
    issues: [
      {
        title: 'Older borough systems on steep lots',
        body: 'Jim Thorpe’s Victorian downtown and the streets around it have homes with septic tanks that have been in the ground for generations, sitting on steep, tight lots. These older systems are often undersized and have no service record, so regular pumping and an honest look at the tank keep a small problem from becoming a field failure.',
      },
      {
        title: 'Short-term rentals feeding the tourist trade',
        body: 'The whitewater, biking, and gorge traffic has turned a lot of homes on the ridges above town into short-term rentals that go from empty to a full house every weekend. That bursty use fills a septic tank far faster than a normal household, so rentals need pumping on a shorter interval than the standard rule assumes.',
      },
      {
        title: 'Pump systems on the mountain grades',
        body: 'On the steep lots around Jim Thorpe, many homes sit below the only good spot for a drain field, so the system uses a pump to lift effluent uphill. Those pumps and floats wear out, and when one fails the system backs up — we test and replace them so you get an alarm’s warning instead of a backup.',
      },
    ],
    nearby: ['albrightsville', 'hawley', 'mount-pocono'],
    faqs: [
      {
        q: 'Do you cover Jim Thorpe and Carbon County?',
        a: 'Yes. We cover Jim Thorpe and the surrounding Penn Forest and Kidder Township country, out toward Lake Harmony and the ridges above the gorge. Tell us where the property is and how the access looks and we’ll come prepared.',
      },
      {
        q: 'I run a short-term rental in Jim Thorpe — how often should I pump?',
        a: 'More often than a normal home. Rentals feeding the tourist trade see heavy, bursty use, so depending on size and turnover many need pumping every one to three years rather than the usual three to five. We can set a schedule to your booking pattern so you avoid a backup during a guest’s stay.',
      },
      {
        q: 'My home has a septic pump and the alarm went off — what now?',
        a: 'On these steep lots a pump lifts effluent uphill to the drain field, and the alarm means the pump tank is filling faster than the pump empties it — usually a failed pump or stuck float. Cut back on water use and call us; we test the pump and floats and get it running before it backs up.',
      },
    ],
  },
  {
    slug: 'albrightsville',
    name: 'Albrightsville',
    state: 'PA',
    intro:
      'Albrightsville sits in the high country of Carbon County near Hickory Run State Park, best known for the Towamensing Trails and Holiday Pocono gated lake communities — sprawling developments where every home is on its own septic system. Outside those communities the land is rural and wooded, and there’s essentially no sewer out here; septic is how everyone handles wastewater. We pump, clean, repair, and inspect residential septic systems throughout the Albrightsville area. The gated lake communities set the whole pattern: thousands of homes on individual tanks and drain fields tucked into wooded lots, a heavy share of them second homes and weekend places that sit quiet then fill up. Add the community lakes — homes near the water over seasonal high water tables that leave a drain field little dry soil to work with — plus unmarked buried tanks with no records and hard winters that freeze shallow lines at empty homes, and you have systems that need a real schedule and an honest eye. We know Towamensing Trails, Holiday Pocono, and the country around Hickory Run, how to find a tank on a wooded community lot, and how to service it cleanly. Tell us where your tank is and we’ll give you a straight answer and a real price.',
    neighborhoods: ['Towamensing Trails', 'Holiday Pocono', 'Penn Forest Township', 'Kidder Township', 'Indian Mountain Lakes', 'Hickory Run'],
    landmarks: ['Hickory Run State Park', 'Towamensing Trails', 'Holiday Pocono', 'Boulder Field'],
    issues: [
      {
        title: 'Gated lake-community septic density',
        body: 'Towamensing Trails and Holiday Pocono hold thousands of homes, every one on its own septic tank and drain field tucked into a wooded lot. In communities this size, a heavy share are second and weekend homes, and a full or failing system is easy to overlook. Regular pumping and knowing exactly where your tank sits keep a quiet system from becoming a backup.',
      },
      {
        title: 'Community lakes and high water tables',
        body: 'Homes near the community lakes can sit over a seasonal high water table, which leaves a drain field little dry soil to absorb effluent. Fields here are sensitive to overload, so pumping on schedule and keeping extra runoff off the field is especially important where the ground stays damp.',
      },
      {
        title: 'Unmarked tanks and winter freezing',
        body: 'Tanks across these developments were buried decades ago on tree-covered lots with no records passed between owners, and hard winters can freeze shallow lines at homes left empty and unheated. We locate and dig to the tank as part of the job, and can check the vulnerable spots before the cold sets in.',
      },
    ],
    nearby: ['jim-thorpe', 'tobyhanna', 'pocono-pines'],
    faqs: [
      {
        q: 'Do you serve Towamensing Trails and the Albrightsville area?',
        a: 'Yes. We work all through Towamensing Trails, Holiday Pocono, and the surrounding Penn Forest and Kidder Township country near Hickory Run. Tell us your section and lot and how the access looks and we’ll come prepared.',
      },
      {
        q: 'Nobody told me where my tank is in the community — can you find it?',
        a: 'Yes. Unmarked, buried tanks are the norm in these gated lake communities. We locate the tank from the plumbing, the layout, and probing, dig down to the lid, and can map the location so the next service is quick.',
      },
      {
        q: 'We only use our place on weekends — how often should we pump, and should I worry about winter?',
        a: 'It depends on how heavily it’s used when you’re there, but weekend and second homes here are easy to neglect, and at an unheated house shallow lines can freeze in a hard winter. We can set a schedule to your actual use and check the vulnerable spots before the cold so you’re not facing a backup or a freeze.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
