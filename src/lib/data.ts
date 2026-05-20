/* ============================================================
   TPO Landing Page — Centralized Data (Updated to match real UI)
   ============================================================ */

export const IMAGES = {
  brideGroom: "/bride_groom.jpg",
  venue: "/Wedding-venue.jpg",
  jaipur: "/Jaipur.jpg",
  invite: "/invite-card.jpg",
} as const;

export const VENDORS = [
  { name: "Mango Valley Resorts", desc: "Perfect for Weddings, Engagements, Birthdays, Corporate Events, Conferences, Concerts, Sangeet, Receptions, Roka Ceremonies.", rating: 5.0, reviews: 150, orders: "100+", address: "S.No.306, Old Nevre Kotawade Road, Ratnagiri, Maharashtra - 415615", price: "₹ 1500 - 25,000", image: IMAGES.venue, badge: true },
  { name: "VIJAY PALACE BANQUET HALL", desc: "Perfect for Birthdays, Engagements, and Roka Ceremonies. Celebrate love and joy with lively Sangeet and elegant Receptions.", rating: 4.5, reviews: 130, orders: "80+", address: "Amal Garden, Rishipuram colony, sikandra, agra, Uttar Pradesh - 282007", price: "₹ 20,000 - 80,000", image: IMAGES.jaipur, badge: false },
  { name: "Zaffran", desc: "Best Suited For Wedding, Anniversary, Baby Shower, Annual Meet, Conference, Award Ceremony, Bridal Shower", rating: 4.5, reviews: 120, orders: "80+", address: "Amal Garden, Rishipuram colony, sikandra, agra, Uttar Pradesh - 282007", price: "₹ 20,000 - 80,000", image: IMAGES.venue, badge: true },
  { name: "Sai Garden", desc: "Ideal for Anniversaries, Birthdays, and Baby Showers. Perfect for corporate occasions like Annual Meets and Award Ceremonies.", rating: 4.6, reviews: 80, orders: "80+", address: "6X4X+V73, Raja Balwant Singh Rd, Pashupati Colony, Agra - 282002", price: "₹ 20,000 - 80,000", image: IMAGES.brideGroom, badge: false },
];

export const POPULAR_SEARCHES = [
  { label: "Event Planner in Hyderabad", image: IMAGES.brideGroom },
  { label: "Band and Entertainment in Pune", image: IMAGES.venue },
  { label: "Catering in Delhi", image: IMAGES.jaipur },
  { label: "Photography in Kolkata", image: IMAGES.brideGroom },
];

export const ENGAGING_CATEGORIES = [
  { label: "Venue", price: "₹ 20,000", image: IMAGES.venue },
  { label: "Event planners", price: "₹ 15,000", image: IMAGES.brideGroom },
  { label: "Catering", price: "₹ 10,000", image: IMAGES.jaipur },
  { label: "Decoration", price: "₹ 5,000", image: IMAGES.venue },
  { label: "Photography & Videography", price: "₹ 25,000", image: IMAGES.brideGroom },
];

export const FEATURED_CATEGORIES = [
  { label: "Jewellery", price: "₹ 11,000", image: IMAGES.brideGroom },
  { label: "Pandit", price: "₹ 9,000", image: IMAGES.jaipur },
  { label: "Fashion Designer", price: "₹ 18,000", image: IMAGES.venue },
  { label: "Mahendi Artist", price: "₹ 1,500", image: IMAGES.brideGroom },
  { label: "Fireworks", price: "₹ 500", image: IMAGES.jaipur },
];

export const AIO_CARDS = [
  { title: "Bartenders", price: "₹ 5,000", image: IMAGES.brideGroom },
  { title: "Bouncer", price: "₹ 15,000", image: IMAGES.venue },
  { title: "Choreography", price: "₹ 25,000", image: IMAGES.jaipur },
  { title: "Event Car Rental", price: "₹ 15,000", image: IMAGES.invite },
  { title: "Honeymoon", price: "₹ 40,000", image: IMAGES.venue },
  { title: "Packers and movers", price: "₹ 10,000", image: IMAGES.brideGroom },
  { title: "Flight booking", price: "₹ 5,000", image: IMAGES.jaipur },
  { title: "Beauty Parlour", price: "₹ 3,000", image: IMAGES.brideGroom },
];

export const INVITE_CARDS = [
  { label: "Happy Birthday", image: IMAGES.invite },
  { label: "Sangeet Night", image: IMAGES.invite },
  { label: "Save The Date", image: IMAGES.invite },
  { label: "Wedding Invite", image: IMAGES.invite },
  { label: "Reception", image: IMAGES.invite },
  { label: "Haldi Ceremony", image: IMAGES.invite },
  { label: "Engagement", image: IMAGES.invite },
];

export const DESTINATIONS = [
  { name: "Udaipur", image: IMAGES.jaipur },
  { name: "Jaipur", image: IMAGES.venue },
  { name: "Goa", image: IMAGES.jaipur },
  { name: "Kerala", image: IMAGES.venue },
  { name: "Jodhpur", image: IMAGES.jaipur },
  { name: "Rishikesh", image: IMAGES.venue },
  { name: "Shimla", image: IMAGES.jaipur },
];

export const BLOGS = [
  { tag: "Planning", title: "5 Secrets to Stress-Free Event Planning", desc: "Discover the top strategies to make your wedding planning smooth, organized, and enjoyable from day one.", image: IMAGES.venue },
  { tag: "Vendors", title: "How to Choose the Right Vendor for Your Big Day", desc: "From caterers to photographers — a comprehensive guide to picking the best wedding vendors.", image: IMAGES.brideGroom },
  { tag: "Trends", title: "The Rise of Digital Invitations: Why E-Invites Are Taking Over", desc: "Learn why more couples are choosing stunning digital invitations over traditional paper cards.", image: IMAGES.invite },
];

export const FOOTER_TAGS = [
  { label: "Bridal Wear by tpo", color: "#E91E63" },
  { label: "DJ Party by tpo", color: "#9C27B0" },
  { label: "Wedding Venues by tpo", color: "#FF9800" },
  { label: "Catering by tpo", color: "#4CAF50" },
  { label: "Photography by tpo", color: "#2196F3" },
  { label: "Makeup by tpo", color: "#FF5722" },
];

export const FOOTER_LINKS = {
  useful: ["Home","About Us","FAQ","Contact Us","Careers","Terms and Conditions","Privacy Policy","Feedback"],
  services: ["Band and Shehnai","Caterers","Event Planner","Honeymoon Packages","Invitation Cards","Pandit and Astrologer","Mehndi Artist","Wedding Doli"],
  destinations: ["Banquet and Matrimony","Resort for Rental","Events Pandals and Mantaps","Jewellery and Accessories","Photographer and Videographer"],
  help: ["Fashion Designing and Cloth Store","Makeup Artist"],
};

export const GALLERY_IMAGES = [
  IMAGES.brideGroom, IMAGES.venue, IMAGES.jaipur, IMAGES.invite,
  IMAGES.brideGroom, IMAGES.venue, IMAGES.jaipur, IMAGES.invite,
];
