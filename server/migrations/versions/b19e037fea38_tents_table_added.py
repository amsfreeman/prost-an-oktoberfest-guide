"""tents table added

Revision ID: b19e037fea38
Revises: 3cb53c009469
Create Date: 2023-08-17 11:36:05.382064

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b19e037fea38'
down_revision = '3cb53c009469'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tents',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('capacity', sa.Integer(), nullable=True),
    sa.Column('first_year', sa.Integer(), nullable=True),
    sa.Column('beer_sold', sa.Integer(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('details', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tents')
    # ### end Alembic commands ###
